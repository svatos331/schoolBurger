import { likeTxtType } from "user.InterfaceLayer/Libraries/main.library/UI_KIT/Atoms/Input.atom/type";

export const checkType = (type: string) => {
    return likeTxtType.includes(type);
};

export const setDateRange = (date: Date) => {
    return {min: formatDate(new Date()), max: formatDate(date)};
};

export const InputMask = (type: any, val: string) => {
    switch (type) {
        case "number":
            return /^[1-9][0-9]*$/.test(val)?val:val.slice(0,-1);
        case "textOnly":
            return /^[a-zA-Zа-яА-Я\s]+$/.test(val)?val:val.slice(0,-1);;
        case "tel":{
            if(val.length === 12) return val.slice(0,-1);

            return /^[7-8][0-9]*$/.test(val)?val:val.slice(0,-1);
        }
        default:
            return val;
      }
};

export const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return`${year}-${month}-${day}T${hours}:${minutes}`;
};