
export const bengUrl = `&breed_ids=beng`
export const abysUrl = `&breed_ids=abys`
export const persUrl = `&breed_ids=pers`
export const siamUrl = `&breed_ids=siam`
export const abobUrl = `&breed_ids=abob`
export const baliUrl = `&breed_ids=bali`
export const birmUrl = `&breed_ids=birm`
export const sphyUrl = `&breed_ids=sphy`



const termsMap = new Map ([

    ["bengali", "&breed_ids=beng"],
    ["persa", "&breed_ids=pers"],
    ["esfinge", "&breed_ids=sphy"],
    ["abisano", "&breed_ids=abys"],
    ["siames", "&breed_ids=siam"],
    ["balines", "&breed_ids=bali"],
    ["birmano", "&breed_ids=birm"],
    ["americano", "&breed_ids=abob"]

    ])



export const findBreed = (breed) =>{
    console.log(breed)
    return  termsMap.get(breed.toLowerCase())

}