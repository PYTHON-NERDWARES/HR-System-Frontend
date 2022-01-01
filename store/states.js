import axios from "axios"



const initState = {
    credintials: { username: '', password: '' },
    token: '',
    data: [],
    employees: '',
}

export const postRequest = function (api, obj) {
    return (dispatch) => {
        return axios.post(api, obj).then((response) => {
            console.log(response);
            dispatch(getToken({ token: response.data }));
        });
    };
};



export const getRequest = function (api,config) {
    return (dispatch) => {
        return axios.get(api,config).then((response) => {
            console.log(11111111111,response);
            console.log(22222222,api);
            dispatch(getEmpNo({ payload: response.data }));
        });
    };
};


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
            console.log(payload);
            return {
                credintials: { username: payload.username, password: payload.password },
                token: state.token,
                data: state.data,
                employees: state.employees,
            }

        case 'GETTOKEN':
            // console.log();

            return {
                credintials: { username: state.username, password: state.password },
                token: payload,
                data: state.data,
                employees: state.employees,
            }

        case 'GETEMPNO':

            return {
                credintials: { username: state.username, password: state.password },
                token: state.token,
                data: payload,
                employees: state.employees,
            }

        default:
            return state;
    }

}

export default stateReducer;