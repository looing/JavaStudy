package com.topinfo.rs.lz.component.manageinfo.aqda.mbzz.bean.query;


import java.io.Serializable;


/**
 * 安全管理机构
 *
 * @author mengwn
 * @email admin@mebi.me
 * @date 2022-11-09 00:00:12
 */
public class QatSeManageOrganQuery implements Serializable {
    private static final long serialVersionUID = 1L;

    
    /**
     * 机构标识
     */
    private String organId;
    
    /**
     * 企业标识
     */
    private String enterpriseId;
    
    /**
     * 企业名称
     */
    private String enterpriseName;
    
    /**
     * 机构名称
     */
    private String organName;
    
    /**
     * 当前页
     */
    private Integer current;

    /**
     * 每页记录数
     */
    private Integer size;




	public String getOrganId() {
	    return organId;
	}

	public void setOrganId(String organId) {
	    this.organId = organId;
	}


	public String getEnterpriseId() {
	    return enterpriseId;
	}

	public void setEnterpriseId(String enterpriseId) {
	    this.enterpriseId = enterpriseId;
	}


	public String getEnterpriseName() {
	    return enterpriseName;
	}

	public void setEnterpriseName(String enterpriseName) {
	    this.enterpriseName = enterpriseName;
	}


	public String getOrganName() {
	    return organName;
	}

	public void setOrganName(String organName) {
	    this.organName = organName;
	}

    public Integer getCurrent() {
        return current;
    }

    public void setCurrent(Integer current) {
        this.current = current;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }
}
