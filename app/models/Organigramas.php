<?php
/**
*   Sist. RRHH - Sistema de Gestión para Recursos Humanos
*   Empresa Estatal de Transporte por Cable "Mi Teleférico"
*   Versión:  1.0.0
*   Usuario Creador: Ing. Freddy Velasco
*   Fecha Creación:  13-10-2014
*/

use Phalcon\Mvc\Model\Resultset\Simple as Resultset;

class Organigramas extends \Phalcon\Mvc\Model
{


    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("");
    }

    private $_db;

    public function lista()
    {
        $sql = "SELECT o.id,o.padre_id,org.unidad_administrativa as padre,d.direccion_administrativa,o.unidad_administrativa,o.nivel_estructural_id,o.da_id,n.nivel_estructural,o.sigla,o.codigo,o.asistente,o.color 
        FROM organigramas o, das d, nivelestructurales n, organigramas org
        WHERE o.da_id=d.id AND o.nivel_estructural_id=n.id AND o.baja_logica=1 AND o.padre_id=org.id ORDER BY o.padre_id ASC";
        $this->_db = new Seguimientos();
        return new Resultset(null, $this->_db, $this->_db->getReadConnection()->query($sql));
    }

    /**
     * Función para la obtención del listado de áreas administrativas de acuerdo al parámetro enviado.
     * @param $idPadre Identificador del organigrama del cual se desea conocer las áreas dependientes.
     * @return Resultset Listado de organigramas con nivel estructural de area.
     */
    public function getAreas($idPadre = 0)
    {
        $sql = "SELECT * from f_areas(" . $idPadre . ")";
        $this->_db = new Organigramas();
        return new Resultset(null, $this->_db, $this->_db->getReadConnection()->query($sql));
    }

    /**
     * Función para la obtención del listado de gerencias administrativas con vigencia actual.
     * En caso de enviarse el valor cero para el parámetro se envían todos los registros válidos.
     */
    public function getGerencias($idResolucionMinisterial = 0)
    {
        $sql = "SELECT * from f_listado_gerencias($idResolucionMinisterial)";
        $this->_db = new Organigramas();
        return new Resultset(null, $this->_db, $this->_db->getReadConnection()->query($sql));
    }

    /**
     * Función para la obtención del listado de gerencias administrativas con vigencia actual.
     * @param null $padre_id
     * @return Resultset
     */
    public function getDepartamentosAdministrativosPorGerencia($padre_id = null)
    {
        $sql = "SELECT * from f_listado_departamentos_administrativos()";
        if ($padre_id != null)
            $sql .= " WHERE padre_id=" . $padre_id;
        $this->_db = new Organigramas();
        return new Resultset(null, $this->_db, $this->_db->getReadConnection()->query($sql));
    }

    /**
     * Función para la obtención del listado de áreas administrativas.
     * @param null $padre_id
     * @return Resultset
     */
    public function getAreasAdministrativas($padre_id = null)
    {
        $sql = "SELECT * from f_listado_areas_administrativas()";
        if ($padre_id != null)
            $sql .= " WHERE padre_id=" . $padre_id;
        $this->_db = new Organigramas();
        return new Resultset(null, $this->_db, $this->_db->getReadConnection()->query($sql));
    }

    /**
     * Función para verificar que un área determinada corresponda con la unidad administrativa representada por el parámetro $id_organigrama.
     * @param $id_organigrama
     * @param $id_area
     * @return Resultset
     */
    public function verificarCorrectaCorrespondeciaArea($id_organigrama, $id_area)
    {
        $sql = "SELECT CASE WHEN COUNT(*)>0 THEN o.padre_id ELSE 0 END AS id FROM organigramas o ";
        $sql .= "INNER JOIN nivelestructurales n ON n.id = o.nivel_estructural_id ";
        $sql .= "WHERE o.id = " . $id_area . " AND o.padre_id=" . $id_organigrama . " AND n.nivel_estructural LIKE 'AREA' GROUP BY padre_id";
        $this->_db = new Organigramas();
        $arr = new Resultset(null, $this->_db, $this->_db->getReadConnection()->query($sql));
        if (count($arr) > 0) {
            return $arr[0]->id;
        }
        return null;
    }

    /**
     * Función para obtener el listado de organigramas vigentes.
     * @return Resultset
     */
    public function getListadoOrganigramaVigente()
    {
        $sql = "SELECT * FROM f_organigramas() ";
        $this->_db = new Organigramas();
        return new Resultset(null, $this->_db, $this->_db->getReadConnection()->query($sql));
    }

    /**
     * Función para obtener el listado de organigramas vigentes de acuerdo a la gestión solicitada.
     * @param int $gestion
     * @param int $idResolucion
     * @param string $where
     * @param string $group
     * @param int $offset
     * @param int $limit
     * @return Resultset
     */
    public function getListadoOrganigramaVigentePorGestion($gestion = 0, $idResolucion = 0, $where = "", $group = "", $offset = 0, $limit = 0)
    {
        if($gestion>=0&&$idResolucion>=0){
            $sql = "SELECT * FROM f_organigramas_por_vigencia($gestion, $idResolucion, '$where', '$group', $offset, $limit) ";
            $this->_db = new Organigramas();
            return new Resultset(null, $this->_db, $this->_db->getReadConnection()->query($sql));
        }
        return new Resultset();
    }
}
