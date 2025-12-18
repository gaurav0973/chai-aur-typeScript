// Type narrowing
function getChai(kind : string | number){
    if(typeof kind === 'string'){
        return `Making a cup of ${kind} chai....`
    }
    return `Chai Order number is ${kind}....`
}


function servingChai(msg?: string){
    if(msg){
        return `Serving: ${msg}`
    }
    return `Serving: default chai`
}

function orderChai(size: 'small' | 'medium' | 'large' | number){
    if(size === 'small')
        return 'Chai size is small'
    if(size === 'medium')
        return 'Chai size is medium'
    if(size === 'large')
        return 'Chai size is large'
    return `Chai size code is ${size}`
}


class KulhadChai{
    serveChai(){
        return 'Serving chai in kulhad'
    }
}
class GlassChai{
    serveChai(){
        return 'Serving chai in glass'
    }
}

function prepareChai(chai: KulhadChai | GlassChai){
    if(chai instanceof KulhadChai){
        return chai.serveChai()
    }
    return chai.serveChai()
}

// type guard function
type ChaiOrder = {
    type : 'String'
    sugar : number
}
function isChaiOrder(obj:any): obj is ChaiOrder{
    return (
        typeof obj === 'object' && obj !== null && obj.type === 'String' && typeof obj.sugar === 'number'
    )
}

function serveOrder(item : ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving chai with ${item.sugar} spoons of sugar`
    }
    return `Serving order: ${item}`
}