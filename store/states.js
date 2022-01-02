import axios from "axios"
import cookie from 'react-cookies'



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
            console.log('access',response.data);
            dispatch(getToken({ token: response.data }));
            cookie.save('token', response.data)
            console.log(cookie.load('token'));
        });
    };
};

export const deleteRequest = function (api,config) {
    return (dispatch) => {
        return axios.delete(api, config)
    };
};


export const getRequest = function (api1, api2, api3, config) {
    return (dispatch) => {
        return (
            axios.get(api1, config).then((response) => {
                dispatch(getEmpNo({ payload: response.data }));
                // console.log(222222222, response.data);
                let total = TotalSalary(response.data)
                // console.log(333333, total);
                dispatch(setTotalSalary({ payload: total }));
            }),
            axios.get(api2, config).then((response) => {
                dispatch(getBrNo({ branches: response.data }))
            }),
            axios.get(api3, config).then((response) => {
                // console.log(44444, response.data);
                dispatch(getDepNo({ departments: response.data }))
            })
        )
    };
};

// export const getRequestBranch = function (api, config) {
//     return (dispatch) => {
//         return axios.get(api, config).then((response) => {
//             console.log(222222,response);
//             dispatch(getBrNo({ branches: response.data }));
//         });
//     };
// };

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
            // console.log(payload);
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
            }

        case 'GETTOKEN':
            // console.log();

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
            }

        case 'SETTOTALSALARY':

            return {
                credintials: { username: state.username, password: state.password },
                token: state.token,
                data: state.data,
                branches: state.branches,
                departments: state.departments,
                employees: state.employees,
                totalsalary: payload,
                salary: state.salary,
                rightside: state.rightside,
                open:state.open,
                addorupdate: state.addorupdate,
            }

        case 'GETDEPNO':
            // console.log(55555,payload);
            return {
                credintials: { username: state.username, password: state.password },
                token: state.token,
                data: state.data,
                branches: state.branches,
                departments: payload.departments,
                employees: state.employees,
                totalsalary: state.totalsalary,
                salary: state.salary,
                rightside: state.rightside,
                open:state.open,
                addorupdate: state.addorupdate,
            }

        case 'RIGHTSIDE':
            // console.log(55555,payload);
            return {
                credintials: { username: state.username, password: state.password },
                token: state.token,
                data: state.data,
                branches: state.branches,
                departments: state.departments,
                employees: state.employees,
                totalsalary: state.totalsalary,
                salary: state.salary,
                rightside: payload,
                open:state.open,
                addorupdate: state.addorupdate,
            }

            case 'OPENMODEL':
            // console.log(55555,payload);
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
            }

            case 'ADDORUPDATE':
            // console.log(55555,payload);
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
            }

        default:
            return state;
    }

}

export default stateReducer;