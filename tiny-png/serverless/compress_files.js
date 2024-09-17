const imagemin = require("imagemin");
const imageminjpegRecompress = require("imagemin-jpeg-recompress");
const imageminPngquant = require("imagemin-pngquant");

exports.handler = async (event,context) =>{
    const params = JSON.parse(event.body);
    console.log(event.body);
    const {base64String,name,extention} = params;
    const base64Image = base64String.split(';base64').pop();
    const filename = `${name}.${extention}`;


    try{
        const result = Buffer.from(base64Image, 'base64');
         const newImgBuffer = await imagemin.Buffer(result,{
            destination:'serverless/compress_files',
            plugins:[
                imageminjpegRecompress({
                    min:20,
                    max:60
                }),
                imageminPngquant({
                    quality: [0.2,0.6]
                })
            ]
         });

         const filesize = newImgBuffer.length;
         const base64CompString = newImgBuffer.toString('base64');
         const imageDataObj = {base64CompString,filename,filesize};
         return {
            statusCode:200,
            body: JSON.stringify(imageDataObj)
         }
    } catch (err){
        return{
            statusCode:500,
            body:JSON.stringify({error: "File Error"})
        }
    }
}