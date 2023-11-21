misFunciones = require('./index');

test('Resultado de la suma', function(){
    expect(misFunciones.suma(2,2)).toBe(4)
    expect(misFunciones.suma(3,3)).toBe(6)
    expect(misFunciones.suma(25,25)).not.toBe(60)    
})

test('Resultado de la multiplicacion', function(){
    expect(misFunciones.multiplicar(3,3)).toBe(9)
    expect(misFunciones.multiplicar(5,4)).not.toBe(21)
})

test('Resultado de la division', function(){
    expect(misFunciones.dividir(10,5)).toBe(2)
    expect(misFunciones.dividir(200,20)).toBe(10)
    expect(misFunciones.dividir(1000,500)).not.toBe(3)
})

test('Resultado de la resta', function(){
    expect(misFunciones.restar(100,50)).toBe(50)
    expect(misFunciones.restar(55,25)).toBe(30)
    expect(misFunciones.restar(70,50)).not.toBe(60)
})

test('Resultado en mayuscula', function(){
    expect(misFunciones.convertirMayuscula('perro')).toMatch('PERRO')
    expect(misFunciones.convertirMayuscula('buenos dias')).toMatch('BUENOS DIAS')
    expect(misFunciones.convertirMayuscula('hola')).not.toMatch('JUAN')
})



