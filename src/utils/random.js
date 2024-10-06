export const randomChar=()=>{
    const str ="qwertyuiopasdfghjklzxcvbnm";
    return str[Math.random(Math.floor()*str.length)];
}