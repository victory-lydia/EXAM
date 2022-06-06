class patient{
    constructor(name,disease)
    {
        this.name = name;
        this.disease = disease;
    }
    setName(name){
        this.name = name;
    }
    addPatient(p){
        this.patients.push(p)
    }
}
export default patient