import express, { response } from 'express'
import con from '../utils/db.js'
import jwt from 'jsonwebtoken'
import bcrypt, { hash } from 'bcrypt'

const router = express.Router()


router.post('/employee_login', (req, res) => {
    const sql = "SELECT * from employee Where email = ?"
    con.query(sql, [req.body.email], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "Query error" })
        if (result.length > 0) {
            bcrypt.compare(req.body.password, result[0].password, (err, response) => {
                if (err) return res.json({ loginStatus: false, Error: "Wrong password" })
                    if(response) {
                        const email = result[0].email;
                        const token = jwt.sign(
                { role: "employee", email: email, id: result[0].id }, 
                "jwt_secret_key", 
                { expiresIn: '1d' }
                   )
                   res.cookie('token', token)
                   return res.json({ loginStatus: true, id: result[0].id })
                    } 
            })
        } else {
            return res.json({ loginStatus: false, Error: "Wrong email or password" })
        }
    })
})

router.get('/detail/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM employee where id = ?"
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Status: false});
        return res.json(result)
    })
})

router.put('/detail/:id', (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE employee
    set name= ?, start_date = ?, end_date = ?, leavetype = ?, status = ?, reason = ?
    Where id = ?`
    const values = [
        req.body.name,
        req.body.start_date,
        req.body.end_date,
        req.body.leavetype,
        req.body.status,
        req.body.reason
    ]
    con.query(sql,[id], (err, result) => {
        if(err) return res.json({Status: false, Error: "Query Error"+err})
            return res.json({Status: true, Result: result})
    })
})


router.get('/logout', (req, res) => {
    res.clearCookie('token')
    return res.json({Status: true})
})

router.post('/leavepage', (req, res) => {
    const sql = `INSERT INTO leavepage
     (name, category, start_date, end_date, reason, status) 
     VALUES (?)`;
        const values = [
    req.body.name,
    req.body.category,
    req.body.start_date,
    req.body.end_date,
    req.body.reason,
    req.body.status
    ]
    con.query(sql, [values], (err, result) => {
        if(err) return res.json({Status: false, Error: err})
            return res.json({Status: true})
    })
})


router.get('/fetch/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM leavepage where id = ?"
    con.query(sql, [id], (err, result) => {
        if(err) return res.json({Status: false});
        return res.json(result)
    })
})


export { router as EmployeeRouter }