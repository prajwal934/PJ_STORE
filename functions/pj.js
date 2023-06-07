// domain/.netlify/functions/pj

const items= [
    {id: 1 , name: 'Prajwal'},
    {id: 2 , name: 'Pinku'}, 
]

exports.handler = async function(event , context){

    return {
        statusCode: 200, 
        body: 'Hello Prajwal',
    }
}