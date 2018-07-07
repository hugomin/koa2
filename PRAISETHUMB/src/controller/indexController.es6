import indexModel from '../models/indexmodel';
const indexController = {
    index(){
        return async(ctx,next)=>{
            ctx.body = await ctx.render('index',{
                title:"大拇指点赞"
            })
        }
    },
    update(){
        return async(ctx,next)=>{
            const indexM = new indexModel();
            ctx.body = await indexM.updateNum()
        }
    }
}
export default indexController