const menu = (req, res) => {
    res.render("menu", {} );
}
const formPay = (req, res) => {
    res.render("form", {form : {'name': 'PAYMENTS'}} );
}
const formVentures = (req, res) => {
    res.render("form", {form : {'name': 'VENTURES'}} );
}
const formPrime = (req, res) => {
    res.render("form", {form : {'name': 'PRIME'}} );
}
const formCheckOut = (req, res) => {
    res.render("form", {form : {'name': 'CHECKOUT'}} );
}
const formApp = (req, res) => {
    res.render("form", {form : {'name': 'APP'}} );
}

const thanks = (req, res) => {
    res.render("thanks", {form : {'name': req.body.formType}} );
}

module.exports =  {
    menu,
    formPay,
    formVentures,
    formPrime,
    formCheckOut,
    formApp,
    thanks
};