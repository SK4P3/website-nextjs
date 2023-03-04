export default function handler(req: any, res: any) {
    const year = new Date().getFullYear();
    res.status(200).json({ year });
}
