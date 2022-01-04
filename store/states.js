import axios from "axios"
import cookie from 'react-cookies'
import jsonwebtoken from 'jsonwebtoken';

const initState = {
    credintials: { username: '', password: '' },
    token: "" ,
    data: [],
    branches: [],
    departments: [],
    employees: 0,
    totalsalary: 0,
    salary: 0,
    rightside: 'Dashboard',
    open:false,
    addorupdate:'',
    requestModal:false,
    emInfo:{},
    open_branch_form:false,
}

const TotalSalary = (data) => {
    let total = 0
    data.map(element => {
        total += element.salary
    })
    return total
}


export const postRequest = function (api, obj) {
    return (dispatch) => {
        return axios.post(api, obj).then((response) => {
            dispatch(getToken({ token: response.data }));
            cookie.save('token', response.data)
        });
    };
};

export const createUser = function (api, obj) {
    return (dispatch) => {
        return axios.post(api, obj)
    };
};

export const deleteRequest = function (api,config) {
    return (dispatch) => {
        return axios.delete(api, config)
    };
};


export const getRequest = function (api1, api2, api3, config) {
    return (dispatch) => {
        let decodedPayload = jsonwebtoken.decode(cookie.load('token').access)
        if(decodedPayload.role == "HR"){
            return (
                axios.get(api1, config).then((response) => {
                    dispatch(getEmpNo({ payload: response.data }));
                    let total = TotalSalary(response.data)
                    dispatch(setTotalSalary({ payload: total }));
                }),
                axios.get(api2, config).then((response) => {
                    dispatch(getBrNo({ branches: response.data }))
                }),
                axios.get(api3, config).then((response) => {
                    dispatch(getDepNo({ departments: response.data }))
                })
            )
        }
        else{
            return (
                axios.get(api1, config).then((response) => {
                    dispatch(getEmpNo({ payload: response.data }));
                    dispatch(setTotalSalary({ payload: response.data.salary }));
                }),
                axios.get(api2, config).then((response) => {
                    dispatch(getBrNo({ branches: response.data }))
                }),
                axios.get(api3, config).then((response) => {
                    dispatch(getDepNo({ departments: response.data }))
                })
            )
        }
    };
};

export const emInfo = (obj) => {
    return {
        type: 'EMINFO',
        payload: obj
    }
}


export const open_request_Model = (request_Model) => {
    return {
        type: 'REQUESTMODEL',
        payload: request_Model
    }
}

export const open_branch_Modal = (open_branch_form) => {
    return {
        type: 'REQUESTBRANCHMODEL',
        payload: open_branch_form
    }
}

export const addOrUpdate = (str) => {
    return {
        type: 'ADDORUPDATE',
        payload: str
    }
}

export const rightSide = (right) => {
    return {
        type: 'RIGHTSIDE',
        payload: right
    }
}

export const openModel = (model) => {
    return {
        type: 'OPENMODEL',
        payload: model
    }
}

export const setTotalSalary = (total) => {
    return {
        type: 'SETTOTALSALARY',
        payload: total
    }
}

export const getDepNo = (departments) => {
    return {
        type: 'GETDEPNO',
        payload: departments
    }
}

export const getBrNo = (branches) => {
    return {
        type: 'GETBRNO',
        payload: branches
    }
}

export const getEmpNo = (payload) => {
    return {
        type: 'GETEMPNO',
        payload: payload
    }
}

export const getCredintials = (payload) => {
    return {
        type: 'CREDINTIALS',
        payload: payload
    }
}


export const getToken = (token) => {
    return {
        type: 'GETTOKEN',
        payload: token
    }
}

const stateReducer = (state = initState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'CREDINTIALS':
            return {
                credintials: { username: payload.username, password: payload.password },
                token: state.token,
                data: state.data,
                branches: state.branches,
                departments: state.departments,
                employees: state.employees,
                totalsalary: state.totalsalary,
                salary: state.salary,
                rightside: state.rightside,
                open:state.open,
                addorupdate: state.addorupdate,
                requestModal: state.requestModal,
                emInfo:state.emInfo,
                open_branch_form:state.open_branch_form,
            }

        case 'GETTOKEN':

            return {
                credintials: { username: state.username, password: state.password },
                token: payload,
                data: state.data,
                branches: state.branches,
                departments: state.departments,
                employees: state.employees,
                totalsalary: state.totalsalary,
                salary: state.salary,
                rightside: state.rightside,
                open:state.open,
                addorupdate: state.addorupdate,
                requestModal: state.requestModal,
                emInfo:state.emInfo,
                open_branch_form:state.open_branch_form,
            }

        case 'GETEMPNO':

            return {
                credintials: { username: state.username, password: state.password },
                token: state.token,
                data: payload,
                branches: state.branches,
                departments: state.departments,
                employees: state.employees,
                totalsalary: state.totalsalary,
                salary: state.salary,
                rightside: state.rightside,
                open:state.open,
                addorupdate: state.addorupdate,
                requestModal: state.requestModal,
                emInfo:state.emInfo,
                open_branch_form:state.open_branch_form,
            }

        case 'GETBRNO':

            return {
                credintials: { username: state.username, password: state.password },
                token: state.token,
                data: state.data,
                branches: payload,
                departments: state.departments,
                employees: state.employees,
                totalsalary: state.totalsalary,
                salary: state.salary,
                rightside: state.rightside,
                open:state.open,
                addorupdate: state.addorupdate,
                requestModal: state.requestModal,
                emInfo:state.emInfo,
                open_branch_form:state.open_branch_form,
            }

        case 'SETTOTALSALARY':

            return {
                credintials: { username: state.username, password: state.password },
                token: state.token,
                data: state.data,
                branches: state.branches,
                totalsalary: payload,
                departments: state.departments,
                employees: state.employees,
                salary: state.salary,
                rightside: state.rightside,
                open:state.open,
                addorupdate: state.addorupdate,
                requestModal: state.requestModal,
                emInfo:state.emInfo,
                open_branch_form:state.open_branch_form,
            }

        case 'GETDEPNO':
            return {
                credintials: { username: state.username, password: state.password },
                token: state.token,
                data: state.data,
                branches: state.branches,
                totalsalary: state.totalsalary,
                departments: payload.departments,
                employees: state.employees,
                salary: state.salary,
                rightside: state.rightside,
                open:state.open,
                addorupdate: state.addorupdate,
                requestModal: state.requestModal,
                emInfo:state.emInfo,
                open_branch_form:state.open_branch_form,
            }

        case 'RIGHTSIDE':
            return {
                credintials: { username: state.username, password: state.password },
                token: state.token,
                data: state.data,
                branches: state.branches,
                totalsalary: state.totalsalary,
                departments: state.departments,
                rightside: payload,
                employees: state.employees,
                salary: state.salary,
                open:state.open,
                addorupdate: state.addorupdate,
                requestModal: state.requestModal,
                emInfo:state.emInfo,
                open_branch_form:state.open_branch_form,
            }

            case 'OPENMODEL':
            return {
                credintials: { username: state.username, password: state.password },
                token: state.token,
                data: state.data,
                branches: state.branches,
                departments: state.departments,
                employees: state.employees,
                totalsalary: state.totalsalary,
                salary: state.salary,
                rightside: state.rightside,
                open:payload,
                addorupdate: state.addorupdate,
                requestModal: state.requestModal,
                emInfo:state.emInfo,
                open_branch_form:state.open_branch_form,
            }

            case 'ADDORUPDATE':
            return {
                credintials: { username: state.username, password: state.password },
                token: state.token,
                data: state.data,
                branches: state.branches,
                departments: state.departments,
                employees: state.employees,
                totalsalary: state.totalsalary,
                salary: state.salary,
                rightside: state.rightside,
                open:state.open,
                addorupdate: payload,
                requestModal: state.requestModal,
                emInfo:state.emInfo,
                open_branch_form:state.open_branch_form,
            }

            case 'REQUESTMODEL':
            return {
                credintials: { username: state.username, password: state.password },
                token: state.token,
                data: state.data,
                branches: state.branches,
                departments: state.departments,
                employees: state.employees,
                totalsalary: state.totalsalary,
                salary: state.salary,
                rightside: state.rightside,
                open:state.open,
                addorupdate: state.addorupdate,
                requestModal: payload,
                emInfo:state.emInfo,
                open_branch_form:state.open_branch_form,
            }

            case 'EMINFO':
            return {
                credintials: { username: state.username, password: state.password },
                token: state.token,
                data: state.data,
                branches: state.branches,
                departments: state.departments,
                employees: state.employees,
                totalsalary: state.totalsalary,
                salary: state.salary,
                rightside: state.rightside,
                open:state.open,
                addorupdate: state.addorupdate,
                requestModal: state.requestModal,
                emInfo:payload,
                open_branch_form:state.open_branch_form,
            }

            case 'REQUESTBRANCHMODEL':
            return {
                credintials: { username: state.username, password: state.password },
                token: state.token,
                data: state.data,
                branches: state.branches,
                departments: state.departments,
                employees: state.employees,
                totalsalary: state.totalsalary,
                salary: state.salary,
                rightside: state.rightside,
                open:state.open,
                addorupdate: state.addorupdate,
                requestModal: state.requestModal,
                emInfo:state.emInfo,
                open_branch_form:payload,
            }


        default:
            return state;
    }

}

export default stateReducer;