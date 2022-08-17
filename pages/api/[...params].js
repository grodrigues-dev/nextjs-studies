export default function handler(req, res) {
    const { params } =  req.query
    res.status(300).json(params)
    
}