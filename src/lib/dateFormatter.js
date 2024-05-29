import moment from "moment";
import 'moment/locale/es'; 


// Función para formatear la fecha del mensaje
export const formatMessageTime = (createdAt) => {
    const date = new Date(createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000);
    const messageTime = moment(date).locale('es');;
    const now = moment().locale('es');
    // Calcular la diferencia en horas  
    const diffHours = now.diff(messageTime, 'hours');

    if (diffHours < 24) {
        // Si han pasado menos de 24 horas, mostrar el tiempo transcurrido
        return messageTime.fromNow();
    } else if (diffHours < 48) {
        // Si han pasado entre 24 y 48 horas, mostrar "ayer"
        return 'Ayer';
    } else if (diffHours < 72) {
        // Si han pasado entre 48 y 72 horas, mostrar "anteayer"
        return 'Anteayer';
    } else {
        // Si han pasado más de 72 horas, mostrar la fecha real
        return messageTime.format('DD/MM/YYYY');
    }
};