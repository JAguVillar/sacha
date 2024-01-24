import moment from 'moment';

export const install = ({ app }) => {
    app.config.globalProperties.$moment = moment;
}
