const rewire = require("rewire")
const DividerList = rewire("./DividerList")
const styles = DividerList.__get__("styles")
// @ponicode
describe("styles", () => {
    test("0", () => {
        let callFunction = () => {
            styles({ palette: { background: { paper: true } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            styles({ palette: { background: { paper: false } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            styles(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
