export const isAdmin =(req, res, next)=>{
if(req.user.role==="admin"){next()}
else if(req.user._id.tostring()===req.params.id || req.user.orders.includes(req.params.id)){next()}
else{res.status(403).json({message:"You are not admin"})}

}