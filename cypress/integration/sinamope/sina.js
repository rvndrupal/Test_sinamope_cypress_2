
/// <reference types="Cypress" />



//https://docs.cypress.io/guides/references/assertions#Chai

import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')

require('cypress-xpath')
require('cypress-plugin-tab')

describe("Test Sinamope Animales  ", () =>{
    let tiempo=100
    let cantidad=1
    // before(()=>{    
      
    //     cy.visit("https://libssl.senasica.gob.mx/sinamopeWeb/login.xhtml") 
    //     cy.title().should('eq','GOB.MX - SENASICA')
    //     cy.wait(tiempo)
    // })
    // npx cypress run --record --key 7d09f81b-6d47-4f91-b7e0-9203d2e1f3a8  --spec "cypress\integration\sinamope\sinamope.js"
    // npx cypress run   --spec "cypress\integration\sinamope\sinamope.js"  --record --key 7d09f81b-6d47-4f91-b7e0-9203d2e1f3a8 --parallel

    it("Test uno", () =>{
        Cypress.config('defaultCommandTimeout', 40000)
       
        for(let x=1;x<=cantidad;x++)
        {

        cy.visit("https://libssl.senasica.gob.mx/sinamopeWeb/login.xhtml") 
        cy.title().should('eq','GOB.MX - SENASICA')
        cy.wait(tiempo)
            
        

        cy.xpath("(//input[contains(@class,'form-control')])[1]").should("be.visible").type("rolando.camacho.m")
        cy.xpath("(//input[contains(@class,'form-control')])[2]").should("be.visible").type("s3n4202i")
        cy.xpath("//input[contains(@id,'sinamope:btnEntrar')]").should('be.visible').click({force: true})
        cy.wait(1000)
        cy.get('#Movilizacion > .dropdown-toggle').should('be.visible').click({force: true})
        cy.wait(1000)        
        cy.xpath("(//a[@href='#'][contains(.,'Animales')])[1]").should('be.visible').click({force: true})
        cy.xpath("//input[contains(@id,'sinamope:nombreProp')]").should('be.visible').type('CIA. INCUBADORA ESPERANZA S.A C.V')
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'button')])[1]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        //buscar origen
        cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","51159").select("51159")
        cy.wait(tiempo)

       

        cy.xpath("(//a[@href='#'][contains(.,'HERNANDEZ PEREZ CUTBERTO')])[1]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'text')])[2]").should('be.visible').type('CALLE 65 SN COLONIA SANTA CRUZ MEYEHUALCO CP 09290')
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'button')])[2]").should('be.visible').click({force: true})
        cy.wait(tiempo)


        //Buscar Destino
        cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","432302").select("432302")
        cy.wait(tiempo)

        cy.xpath("(//a[@href='#'])[7]").should('be.visible').click({force: true})
        cy.wait(tiempo)


        //Datos movilización animal
        cy.get('[for="sinamope:j_idt165:0:especie"]').should('be.visible').click({force: true})
        cy.wait(tiempo)

        let cantidad_total=Math.floor(Math.random() * 300 + 20); 
        let cantidad_machos=Math.floor(Math.random() * 10); 
        cy.xpath("//input[contains(@id,'sinamope:cantidadTotal')]").should('be.visible').type(cantidad_total)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@id,'sinamope:cantidadMachos')]").should('be.visible').type(cantidad_machos)
        cy.wait(tiempo)

        //Motivo
        let motivo_Arr = [
            "127",
            "128",
            "129",        
          ];
        let randomMotivo = motivo_Arr[Math.floor(Math.random()*motivo_Arr.length)];    

        cy.xpath("//select[contains(@id,'sinamope:selMotivo')]").select("127", { force: true }).should('have.value',"127")
        cy.wait(1500)

        //Identificación
        let iden_Arr = [
            "1",
            "2",
            "4",
            "5",            
            "9",            
            "10",            
          ];
        let randomIdentificacion = iden_Arr[Math.floor(Math.random()*iden_Arr.length)];  
        
        cy.xpath("//select[contains(@id,'sinamope:selIdentificacion')]").select(randomIdentificacion, { force: true }).should('have.value',randomIdentificacion)
        cy.wait(tiempo)

        //estado
        cy.xpath("//label[@for='sinamope:j_idt210:1:tipoVerificacion'][contains(.,'Estados')]").should('be.visible').click({force: true})
        cy.wait(tiempo)
        let estado=Math.floor(Math.random() * 2 + 1);

        //Estado
        let estado_Arr = [
            "64",
            "65",
            "66",
            "67",
            "68",
            "69",
          ];
        let randomEstado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)];         
        cy.xpath("//select[contains(@id,'sinamope:selEstado')]").select(randomEstado, { force: true }).should('have.value',randomEstado)
        cy.wait(tiempo)

        
      
        cy.get(':nth-child(4) > .col-md-offset-3 > .md1em').should('be.visible').click({force: true})
        cy.wait(tiempo)

        //vehiculo
        let coche_Arr = [
            "Nissan",
            "Ford",
            "Kia",
            "Honda",            
            "Toyota",            
            "Fiat",            
          ];
        let randomCoche = coche_Arr[Math.floor(Math.random()*coche_Arr.length)];  
        cy.xpath("//input[contains(@id,'sinamope:marcaVehiculo')]").type(randomCoche)
        cy.wait(tiempo)
        let pla=Math.floor(Math.random() * 3678 + 11); 
        let placa="rfg-tyr" + pla
        cy.xpath("//input[contains(@id,'sinamope:placaVehiculo')]").should('be.visible').type(placa)
        cy.wait(tiempo)

        //Vehiculo_flejado
        cy.xpath("(//input[contains(@type,'text')])[15]").should('be.visible').type('G247220')
        cy.wait(tiempo)

        //Guardar
        cy.get('#btnGuardarPrecaptura').should('be.visible').click({force: true})
        cy.wait(tiempo)

        //Descripción
        cy.xpath("(//input[contains(@type,'text')])[17]").should('be.visible').type('Descripción demo '+ pla)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@id,'sinamope:btnSiVentanaGuardar')]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        //Resumen
        // cy.xpath("//input[contains(@id,'sinamope:btnResumen')]").should('be.visible').click({force: true})
        // cy.wait(tiempo)
        }

        
        
        

        

       

       

       

    })

    it("Test dos", () =>{
        Cypress.config('defaultCommandTimeout', 40000)
       
        for(let x=1;x<=cantidad;x++)
        {

        cy.visit("https://libssl.senasica.gob.mx/sinamopeWeb/login.xhtml") 
        cy.title().should('eq','GOB.MX - SENASICA')
        cy.wait(tiempo)
            
        

        cy.xpath("(//input[contains(@class,'form-control')])[1]").should("be.visible").type("rolando.camacho.m")
        cy.xpath("(//input[contains(@class,'form-control')])[2]").should("be.visible").type("s3n4202i")
        cy.xpath("//input[contains(@id,'sinamope:btnEntrar')]").should('be.visible').click({force: true})
        cy.wait(1000)
        cy.get('#Movilizacion > .dropdown-toggle').should('be.visible').click({force: true})
        cy.wait(1000)        
        cy.xpath("(//a[@href='#'][contains(.,'Animales')])[1]").should('be.visible').click({force: true})
        cy.xpath("//input[contains(@id,'sinamope:nombreProp')]").should('be.visible').type('CIA. INCUBADORA ESPERANZA S.A C.V')
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'button')])[1]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        //buscar origen
        cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","51159").select("51159")
        cy.wait(tiempo)

       

        cy.xpath("(//a[@href='#'][contains(.,'HERNANDEZ PEREZ CUTBERTO')])[1]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'text')])[2]").should('be.visible').type('CALLE 65 SN COLONIA SANTA CRUZ MEYEHUALCO CP 09290')
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'button')])[2]").should('be.visible').click({force: true})
        cy.wait(tiempo)


        //Buscar Destino
        cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","432302").select("432302")
        cy.wait(tiempo)

        cy.xpath("(//a[@href='#'])[7]").should('be.visible').click({force: true})
        cy.wait(tiempo)


        //Datos movilización animal
        cy.get('[for="sinamope:j_idt165:0:especie"]').should('be.visible').click({force: true})
        cy.wait(tiempo)

        let cantidad_total=Math.floor(Math.random() * 300 + 20); 
        let cantidad_machos=Math.floor(Math.random() * 10); 
        cy.xpath("//input[contains(@id,'sinamope:cantidadTotal')]").should('be.visible').type(cantidad_total)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@id,'sinamope:cantidadMachos')]").should('be.visible').type(cantidad_machos)
        cy.wait(tiempo)

        //Motivo
        let motivo_Arr = [
            "127",
            "128",
            "129",        
          ];
        let randomMotivo = motivo_Arr[Math.floor(Math.random()*motivo_Arr.length)];    

        cy.xpath("//select[contains(@id,'sinamope:selMotivo')]").select("127", { force: true }).should('have.value',"127")
        cy.wait(1500)

        //Identificación
        let iden_Arr = [
            "1",
            "2",
            "4",
            "5",            
            "9",            
            "10",            
          ];
        let randomIdentificacion = iden_Arr[Math.floor(Math.random()*iden_Arr.length)];  
        
        cy.xpath("//select[contains(@id,'sinamope:selIdentificacion')]").select(randomIdentificacion, { force: true }).should('have.value',randomIdentificacion)
        cy.wait(tiempo)

        //estado
        cy.xpath("//label[@for='sinamope:j_idt210:1:tipoVerificacion'][contains(.,'Estados')]").should('be.visible').click({force: true})
        cy.wait(tiempo)
        let estado=Math.floor(Math.random() * 2 + 1);

        //Estado
        let estado_Arr = [
            "64",
            "65",
            "66",
            "67",
            "68",
            "69",
          ];
        let randomEstado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)];         
        cy.xpath("//select[contains(@id,'sinamope:selEstado')]").select(randomEstado, { force: true }).should('have.value',randomEstado)
        cy.wait(tiempo)

        
      
        cy.get(':nth-child(4) > .col-md-offset-3 > .md1em').should('be.visible').click({force: true})
        cy.wait(tiempo)

        //vehiculo
        let coche_Arr = [
            "Nissan",
            "Ford",
            "Kia",
            "Honda",            
            "Toyota",            
            "Fiat",            
          ];
        let randomCoche = coche_Arr[Math.floor(Math.random()*coche_Arr.length)];  
        cy.xpath("//input[contains(@id,'sinamope:marcaVehiculo')]").type(randomCoche)
        cy.wait(tiempo)
        let pla=Math.floor(Math.random() * 3678 + 11); 
        let placa="rfg-tyr" + pla
        cy.xpath("//input[contains(@id,'sinamope:placaVehiculo')]").should('be.visible').type(placa)
        cy.wait(tiempo)

        //Vehiculo_flejado
        cy.xpath("(//input[contains(@type,'text')])[15]").should('be.visible').type('G247220')
        cy.wait(tiempo)

        //Guardar
        cy.get('#btnGuardarPrecaptura').should('be.visible').click({force: true})
        cy.wait(tiempo)

        //Descripción
        cy.xpath("(//input[contains(@type,'text')])[17]").should('be.visible').type('Descripción demo '+ pla)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@id,'sinamope:btnSiVentanaGuardar')]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        //Resumen
        // cy.xpath("//input[contains(@id,'sinamope:btnResumen')]").should('be.visible').click({force: true})
        // cy.wait(tiempo)
        }       

    })

    it("Test tres", () =>{
        Cypress.config('defaultCommandTimeout', 40000)
       
        for(let x=1;x<=cantidad;x++)
        {

        cy.visit("https://libssl.senasica.gob.mx/sinamopeWeb/login.xhtml") 
        cy.title().should('eq','GOB.MX - SENASICA')
        cy.wait(tiempo)
            
        

        cy.xpath("(//input[contains(@class,'form-control')])[1]").should("be.visible").type("rolando.camacho.m")
        cy.xpath("(//input[contains(@class,'form-control')])[2]").should("be.visible").type("s3n4202i")
        cy.xpath("//input[contains(@id,'sinamope:btnEntrar')]").should('be.visible').click({force: true})
        cy.wait(1000)
        cy.get('#Movilizacion > .dropdown-toggle').should('be.visible').click({force: true})
        cy.wait(1000)        
        cy.xpath("(//a[@href='#'][contains(.,'Animales')])[1]").should('be.visible').click({force: true})
        cy.xpath("//input[contains(@id,'sinamope:nombreProp')]").should('be.visible').type('CIA. INCUBADORA ESPERANZA S.A C.V')
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'button')])[1]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        //buscar origen
        cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","51159").select("51159")
        cy.wait(tiempo)

       

        cy.xpath("(//a[@href='#'][contains(.,'HERNANDEZ PEREZ CUTBERTO')])[1]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'text')])[2]").should('be.visible').type('CALLE 65 SN COLONIA SANTA CRUZ MEYEHUALCO CP 09290')
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'button')])[2]").should('be.visible').click({force: true})
        cy.wait(tiempo)


        //Buscar Destino
        cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","432302").select("432302")
        cy.wait(tiempo)

        cy.xpath("(//a[@href='#'])[7]").should('be.visible').click({force: true})
        cy.wait(tiempo)


        //Datos movilización animal
        cy.get('[for="sinamope:j_idt165:0:especie"]').should('be.visible').click({force: true})
        cy.wait(tiempo)

        let cantidad_total=Math.floor(Math.random() * 300 + 20); 
        let cantidad_machos=Math.floor(Math.random() * 10); 
        cy.xpath("//input[contains(@id,'sinamope:cantidadTotal')]").should('be.visible').type(cantidad_total)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@id,'sinamope:cantidadMachos')]").should('be.visible').type(cantidad_machos)
        cy.wait(tiempo)

        //Motivo
        let motivo_Arr = [
            "127",
            "128",
            "129",        
          ];
        let randomMotivo = motivo_Arr[Math.floor(Math.random()*motivo_Arr.length)];    

        cy.xpath("//select[contains(@id,'sinamope:selMotivo')]").select("127", { force: true }).should('have.value',"127")
        cy.wait(1500)

        //Identificación
        let iden_Arr = [
            "1",
            "2",
            "4",
            "5",            
            "9",            
            "10",            
          ];
        let randomIdentificacion = iden_Arr[Math.floor(Math.random()*iden_Arr.length)];  
        
        cy.xpath("//select[contains(@id,'sinamope:selIdentificacion')]").select(randomIdentificacion, { force: true }).should('have.value',randomIdentificacion)
        cy.wait(tiempo)

        //estado
        cy.xpath("//label[@for='sinamope:j_idt210:1:tipoVerificacion'][contains(.,'Estados')]").should('be.visible').click({force: true})
        cy.wait(tiempo)
        let estado=Math.floor(Math.random() * 2 + 1);

        //Estado
        let estado_Arr = [
            "64",
            "65",
            "66",
            "67",
            "68",
            "69",
          ];
        let randomEstado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)];         
        cy.xpath("//select[contains(@id,'sinamope:selEstado')]").select(randomEstado, { force: true }).should('have.value',randomEstado)
        cy.wait(tiempo)

        
      
        cy.get(':nth-child(4) > .col-md-offset-3 > .md1em').should('be.visible').click({force: true})
        cy.wait(tiempo)

        //vehiculo
        let coche_Arr = [
            "Nissan",
            "Ford",
            "Kia",
            "Honda",            
            "Toyota",            
            "Fiat",            
          ];
        let randomCoche = coche_Arr[Math.floor(Math.random()*coche_Arr.length)];  
        cy.xpath("//input[contains(@id,'sinamope:marcaVehiculo')]").type(randomCoche)
        cy.wait(tiempo)
        let pla=Math.floor(Math.random() * 3678 + 11); 
        let placa="rfg-tyr" + pla
        cy.xpath("//input[contains(@id,'sinamope:placaVehiculo')]").should('be.visible').type(placa)
        cy.wait(tiempo)

        //Vehiculo_flejado
        cy.xpath("(//input[contains(@type,'text')])[15]").should('be.visible').type('G247220')
        cy.wait(tiempo)

        //Guardar
        cy.get('#btnGuardarPrecaptura').should('be.visible').click({force: true})
        cy.wait(tiempo)

        //Descripción
        cy.xpath("(//input[contains(@type,'text')])[17]").should('be.visible').type('Descripción demo '+ pla)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@id,'sinamope:btnSiVentanaGuardar')]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        //Resumen
        // cy.xpath("//input[contains(@id,'sinamope:btnResumen')]").should('be.visible').click({force: true})
        // cy.wait(tiempo)
        }       

    })

    it("Test cuatro", () =>{
        Cypress.config('defaultCommandTimeout', 40000)
       
        for(let x=1;x<=cantidad;x++)
        {

        cy.visit("https://libssl.senasica.gob.mx/sinamopeWeb/login.xhtml") 
        cy.title().should('eq','GOB.MX - SENASICA')
        cy.wait(tiempo)
            
        

        cy.xpath("(//input[contains(@class,'form-control')])[1]").should("be.visible").type("rolando.camacho.m")
        cy.xpath("(//input[contains(@class,'form-control')])[2]").should("be.visible").type("s3n4202i")
        cy.xpath("//input[contains(@id,'sinamope:btnEntrar')]").should('be.visible').click({force: true})
        cy.wait(1000)
        cy.get('#Movilizacion > .dropdown-toggle').should('be.visible').click({force: true})
        cy.wait(1000)        
        cy.xpath("(//a[@href='#'][contains(.,'Animales')])[1]").should('be.visible').click({force: true})
        cy.xpath("//input[contains(@id,'sinamope:nombreProp')]").should('be.visible').type('CIA. INCUBADORA ESPERANZA S.A C.V')
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'button')])[1]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        //buscar origen
        cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","51159").select("51159")
        cy.wait(tiempo)

       

        cy.xpath("(//a[@href='#'][contains(.,'HERNANDEZ PEREZ CUTBERTO')])[1]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'text')])[2]").should('be.visible').type('CALLE 65 SN COLONIA SANTA CRUZ MEYEHUALCO CP 09290')
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'button')])[2]").should('be.visible').click({force: true})
        cy.wait(tiempo)


        //Buscar Destino
        cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","432302").select("432302")
        cy.wait(tiempo)

        cy.xpath("(//a[@href='#'])[7]").should('be.visible').click({force: true})
        cy.wait(tiempo)


        //Datos movilización animal
        cy.get('[for="sinamope:j_idt165:0:especie"]').should('be.visible').click({force: true})
        cy.wait(tiempo)

        let cantidad_total=Math.floor(Math.random() * 300 + 20); 
        let cantidad_machos=Math.floor(Math.random() * 10); 
        cy.xpath("//input[contains(@id,'sinamope:cantidadTotal')]").should('be.visible').type(cantidad_total)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@id,'sinamope:cantidadMachos')]").should('be.visible').type(cantidad_machos)
        cy.wait(tiempo)

        //Motivo
        let motivo_Arr = [
            "127",
            "128",
            "129",        
          ];
        let randomMotivo = motivo_Arr[Math.floor(Math.random()*motivo_Arr.length)];    

        cy.xpath("//select[contains(@id,'sinamope:selMotivo')]").select("127", { force: true }).should('have.value',"127")
        cy.wait(1500)

        //Identificación
        let iden_Arr = [
            "1",
            "2",
            "4",
            "5",            
            "9",            
            "10",            
          ];
        let randomIdentificacion = iden_Arr[Math.floor(Math.random()*iden_Arr.length)];  
        
        cy.xpath("//select[contains(@id,'sinamope:selIdentificacion')]").select(randomIdentificacion, { force: true }).should('have.value',randomIdentificacion)
        cy.wait(tiempo)

        //estado
        cy.xpath("//label[@for='sinamope:j_idt210:1:tipoVerificacion'][contains(.,'Estados')]").should('be.visible').click({force: true})
        cy.wait(tiempo)
        let estado=Math.floor(Math.random() * 2 + 1);

        //Estado
        let estado_Arr = [
            "64",
            "65",
            "66",
            "67",
            "68",
            "69",
          ];
        let randomEstado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)];         
        cy.xpath("//select[contains(@id,'sinamope:selEstado')]").select(randomEstado, { force: true }).should('have.value',randomEstado)
        cy.wait(tiempo)

        
      
        cy.get(':nth-child(4) > .col-md-offset-3 > .md1em').should('be.visible').click({force: true})
        cy.wait(tiempo)

        //vehiculo
        let coche_Arr = [
            "Nissan",
            "Ford",
            "Kia",
            "Honda",            
            "Toyota",            
            "Fiat",            
          ];
        let randomCoche = coche_Arr[Math.floor(Math.random()*coche_Arr.length)];  
        cy.xpath("//input[contains(@id,'sinamope:marcaVehiculo')]").type(randomCoche)
        cy.wait(tiempo)
        let pla=Math.floor(Math.random() * 3678 + 11); 
        let placa="rfg-tyr" + pla
        cy.xpath("//input[contains(@id,'sinamope:placaVehiculo')]").should('be.visible').type(placa)
        cy.wait(tiempo)

        //Vehiculo_flejado
        cy.xpath("(//input[contains(@type,'text')])[15]").should('be.visible').type('G247220')
        cy.wait(tiempo)

        //Guardar
        cy.get('#btnGuardarPrecaptura').should('be.visible').click({force: true})
        cy.wait(tiempo)

        //Descripción
        cy.xpath("(//input[contains(@type,'text')])[17]").should('be.visible').type('Descripción demo '+ pla)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@id,'sinamope:btnSiVentanaGuardar')]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        //Resumen
        // cy.xpath("//input[contains(@id,'sinamope:btnResumen')]").should('be.visible').click({force: true})
        // cy.wait(tiempo)
        }       

    })

    it("Test cinco", () =>{
        Cypress.config('defaultCommandTimeout', 40000)
       
        for(let x=1;x<=cantidad;x++)
        {

        cy.visit("https://libssl.senasica.gob.mx/sinamopeWeb/login.xhtml") 
        cy.title().should('eq','GOB.MX - SENASICA')
        cy.wait(tiempo)
            
        

        cy.xpath("(//input[contains(@class,'form-control')])[1]").should("be.visible").type("rolando.camacho.m")
        cy.xpath("(//input[contains(@class,'form-control')])[2]").should("be.visible").type("s3n4202i")
        cy.xpath("//input[contains(@id,'sinamope:btnEntrar')]").should('be.visible').click({force: true})
        cy.wait(1000)
        cy.get('#Movilizacion > .dropdown-toggle').should('be.visible').click({force: true})
        cy.wait(1000)        
        cy.xpath("(//a[@href='#'][contains(.,'Animales')])[1]").should('be.visible').click({force: true})
        cy.xpath("//input[contains(@id,'sinamope:nombreProp')]").should('be.visible').type('CIA. INCUBADORA ESPERANZA S.A C.V')
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'button')])[1]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        //buscar origen
        cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","51159").select("51159")
        cy.wait(tiempo)

       

        cy.xpath("(//a[@href='#'][contains(.,'HERNANDEZ PEREZ CUTBERTO')])[1]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'text')])[2]").should('be.visible').type('CALLE 65 SN COLONIA SANTA CRUZ MEYEHUALCO CP 09290')
        cy.wait(tiempo)

        cy.xpath("(//input[contains(@type,'button')])[2]").should('be.visible').click({force: true})
        cy.wait(tiempo)


        //Buscar Destino
        cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","432302").select("432302")
        cy.wait(tiempo)

        cy.xpath("(//a[@href='#'])[7]").should('be.visible').click({force: true})
        cy.wait(tiempo)


        //Datos movilización animal
        cy.get('[for="sinamope:j_idt165:0:especie"]').should('be.visible').click({force: true})
        cy.wait(tiempo)

        let cantidad_total=Math.floor(Math.random() * 300 + 20); 
        let cantidad_machos=Math.floor(Math.random() * 10); 
        cy.xpath("//input[contains(@id,'sinamope:cantidadTotal')]").should('be.visible').type(cantidad_total)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@id,'sinamope:cantidadMachos')]").should('be.visible').type(cantidad_machos)
        cy.wait(tiempo)

        //Motivo
        let motivo_Arr = [
            "127",
            "128",
            "129",        
          ];
        let randomMotivo = motivo_Arr[Math.floor(Math.random()*motivo_Arr.length)];    

        cy.xpath("//select[contains(@id,'sinamope:selMotivo')]").select("127", { force: true }).should('have.value',"127")
        cy.wait(1500)

        //Identificación
        let iden_Arr = [
            "1",
            "2",
            "4",
            "5",            
            "9",            
            "10",            
          ];
        let randomIdentificacion = iden_Arr[Math.floor(Math.random()*iden_Arr.length)];  
        
        cy.xpath("//select[contains(@id,'sinamope:selIdentificacion')]").select(randomIdentificacion, { force: true }).should('have.value',randomIdentificacion)
        cy.wait(tiempo)

        //estado
        cy.xpath("//label[@for='sinamope:j_idt210:1:tipoVerificacion'][contains(.,'Estados')]").should('be.visible').click({force: true})
        cy.wait(tiempo)
        let estado=Math.floor(Math.random() * 2 + 1);

        //Estado
        let estado_Arr = [
            "64",
            "65",
            "66",
            "67",
            "68",
            "69",
          ];
        let randomEstado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)];         
        cy.xpath("//select[contains(@id,'sinamope:selEstado')]").select(randomEstado, { force: true }).should('have.value',randomEstado)
        cy.wait(tiempo)

        
      
        cy.get(':nth-child(4) > .col-md-offset-3 > .md1em').should('be.visible').click({force: true})
        cy.wait(tiempo)

        //vehiculo
        let coche_Arr = [
            "Nissan",
            "Ford",
            "Kia",
            "Honda",            
            "Toyota",            
            "Fiat",            
          ];
        let randomCoche = coche_Arr[Math.floor(Math.random()*coche_Arr.length)];  
        cy.xpath("//input[contains(@id,'sinamope:marcaVehiculo')]").type(randomCoche)
        cy.wait(tiempo)
        let pla=Math.floor(Math.random() * 3678 + 11); 
        let placa="rfg-tyr" + pla
        cy.xpath("//input[contains(@id,'sinamope:placaVehiculo')]").should('be.visible').type(placa)
        cy.wait(tiempo)

        //Vehiculo_flejado
        cy.xpath("(//input[contains(@type,'text')])[15]").should('be.visible').type('G247220')
        cy.wait(tiempo)

        //Guardar
        cy.get('#btnGuardarPrecaptura').should('be.visible').click({force: true})
        cy.wait(tiempo)

        //Descripción
        cy.xpath("(//input[contains(@type,'text')])[17]").should('be.visible').type('Descripción demo '+ pla)
        cy.wait(tiempo)
        cy.xpath("//input[contains(@id,'sinamope:btnSiVentanaGuardar')]").should('be.visible').click({force: true})
        cy.wait(tiempo)

        //Resumen
        // cy.xpath("//input[contains(@id,'sinamope:btnResumen')]").should('be.visible').click({force: true})
        // cy.wait(tiempo)
        }       

    })

    it("Test seis", () =>{
      Cypress.config('defaultCommandTimeout', 40000)
     
      for(let x=1;x<=cantidad;x++)
      {

      cy.visit("https://libssl.senasica.gob.mx/sinamopeWeb/login.xhtml") 
      cy.title().should('eq','GOB.MX - SENASICA')
      cy.wait(tiempo)
          
      

      cy.xpath("(//input[contains(@class,'form-control')])[1]").should("be.visible").type("rolando.camacho.m")
      cy.xpath("(//input[contains(@class,'form-control')])[2]").should("be.visible").type("s3n4202i")
      cy.xpath("//input[contains(@id,'sinamope:btnEntrar')]").should('be.visible').click({force: true})
      cy.wait(1000)
      cy.get('#Movilizacion > .dropdown-toggle').should('be.visible').click({force: true})
      cy.wait(1000)        
      cy.xpath("(//a[@href='#'][contains(.,'Animales')])[1]").should('be.visible').click({force: true})
      cy.xpath("//input[contains(@id,'sinamope:nombreProp')]").should('be.visible').type('CIA. INCUBADORA ESPERANZA S.A C.V')
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'button')])[1]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      //buscar origen
      cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","51159").select("51159")
      cy.wait(tiempo)

     

      cy.xpath("(//a[@href='#'][contains(.,'HERNANDEZ PEREZ CUTBERTO')])[1]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'text')])[2]").should('be.visible').type('CALLE 65 SN COLONIA SANTA CRUZ MEYEHUALCO CP 09290')
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'button')])[2]").should('be.visible').click({force: true})
      cy.wait(tiempo)


      //Buscar Destino
      cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","432302").select("432302")
      cy.wait(tiempo)

      cy.xpath("(//a[@href='#'])[7]").should('be.visible').click({force: true})
      cy.wait(tiempo)


      //Datos movilización animal
      cy.get('[for="sinamope:j_idt165:0:especie"]').should('be.visible').click({force: true})
      cy.wait(tiempo)

      let cantidad_total=Math.floor(Math.random() * 300 + 20); 
      let cantidad_machos=Math.floor(Math.random() * 10); 
      cy.xpath("//input[contains(@id,'sinamope:cantidadTotal')]").should('be.visible').type(cantidad_total)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'sinamope:cantidadMachos')]").should('be.visible').type(cantidad_machos)
      cy.wait(tiempo)

      //Motivo
      let motivo_Arr = [
          "127",
          "128",
          "129",        
        ];
      let randomMotivo = motivo_Arr[Math.floor(Math.random()*motivo_Arr.length)];    

      cy.xpath("//select[contains(@id,'sinamope:selMotivo')]").select("127", { force: true }).should('have.value',"127")
      cy.wait(1500)

      //Identificación
      let iden_Arr = [
          "1",
          "2",
          "4",
          "5",            
          "9",            
          "10",            
        ];
      let randomIdentificacion = iden_Arr[Math.floor(Math.random()*iden_Arr.length)];  
      
      cy.xpath("//select[contains(@id,'sinamope:selIdentificacion')]").select(randomIdentificacion, { force: true }).should('have.value',randomIdentificacion)
      cy.wait(tiempo)

      //estado
      cy.xpath("//label[@for='sinamope:j_idt210:1:tipoVerificacion'][contains(.,'Estados')]").should('be.visible').click({force: true})
      cy.wait(tiempo)
      let estado=Math.floor(Math.random() * 2 + 1);

      //Estado
      let estado_Arr = [
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
        ];
      let randomEstado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)];         
      cy.xpath("//select[contains(@id,'sinamope:selEstado')]").select(randomEstado, { force: true }).should('have.value',randomEstado)
      cy.wait(tiempo)

      
    
      cy.get(':nth-child(4) > .col-md-offset-3 > .md1em').should('be.visible').click({force: true})
      cy.wait(tiempo)

      //vehiculo
      let coche_Arr = [
          "Nissan",
          "Ford",
          "Kia",
          "Honda",            
          "Toyota",            
          "Fiat",            
        ];
      let randomCoche = coche_Arr[Math.floor(Math.random()*coche_Arr.length)];  
      cy.xpath("//input[contains(@id,'sinamope:marcaVehiculo')]").type(randomCoche)
      cy.wait(tiempo)
      let pla=Math.floor(Math.random() * 3678 + 11); 
      let placa="rfg-tyr" + pla
      cy.xpath("//input[contains(@id,'sinamope:placaVehiculo')]").should('be.visible').type(placa)
      cy.wait(tiempo)

      //Vehiculo_flejado
      cy.xpath("(//input[contains(@type,'text')])[15]").should('be.visible').type('G247220')
      cy.wait(tiempo)

      //Guardar
      cy.get('#btnGuardarPrecaptura').should('be.visible').click({force: true})
      cy.wait(tiempo)

      //Descripción
      cy.xpath("(//input[contains(@type,'text')])[17]").should('be.visible').type('Descripción demo '+ pla)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'sinamope:btnSiVentanaGuardar')]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      //Resumen
      // cy.xpath("//input[contains(@id,'sinamope:btnResumen')]").should('be.visible').click({force: true})
      // cy.wait(tiempo)
      }       

    })

    it("Test siete", () =>{
      Cypress.config('defaultCommandTimeout', 40000)
     
      for(let x=1;x<=cantidad;x++)
      {

      cy.visit("https://libssl.senasica.gob.mx/sinamopeWeb/login.xhtml") 
      cy.title().should('eq','GOB.MX - SENASICA')
      cy.wait(tiempo)
          
      

      cy.xpath("(//input[contains(@class,'form-control')])[1]").should("be.visible").type("rolando.camacho.m")
      cy.xpath("(//input[contains(@class,'form-control')])[2]").should("be.visible").type("s3n4202i")
      cy.xpath("//input[contains(@id,'sinamope:btnEntrar')]").should('be.visible').click({force: true})
      cy.wait(1000)
      cy.get('#Movilizacion > .dropdown-toggle').should('be.visible').click({force: true})
      cy.wait(1000)        
      cy.xpath("(//a[@href='#'][contains(.,'Animales')])[1]").should('be.visible').click({force: true})
      cy.xpath("//input[contains(@id,'sinamope:nombreProp')]").should('be.visible').type('CIA. INCUBADORA ESPERANZA S.A C.V')
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'button')])[1]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      //buscar origen
      cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","51159").select("51159")
      cy.wait(tiempo)

     

      cy.xpath("(//a[@href='#'][contains(.,'HERNANDEZ PEREZ CUTBERTO')])[1]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'text')])[2]").should('be.visible').type('CALLE 65 SN COLONIA SANTA CRUZ MEYEHUALCO CP 09290')
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'button')])[2]").should('be.visible').click({force: true})
      cy.wait(tiempo)


      //Buscar Destino
      cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","432302").select("432302")
      cy.wait(tiempo)

      cy.xpath("(//a[@href='#'])[7]").should('be.visible').click({force: true})
      cy.wait(tiempo)


      //Datos movilización animal
      cy.get('[for="sinamope:j_idt165:0:especie"]').should('be.visible').click({force: true})
      cy.wait(tiempo)

      let cantidad_total=Math.floor(Math.random() * 300 + 20); 
      let cantidad_machos=Math.floor(Math.random() * 10); 
      cy.xpath("//input[contains(@id,'sinamope:cantidadTotal')]").should('be.visible').type(cantidad_total)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'sinamope:cantidadMachos')]").should('be.visible').type(cantidad_machos)
      cy.wait(tiempo)

      //Motivo
      let motivo_Arr = [
          "127",
          "128",
          "129",        
        ];
      let randomMotivo = motivo_Arr[Math.floor(Math.random()*motivo_Arr.length)];    

      cy.xpath("//select[contains(@id,'sinamope:selMotivo')]").select("127", { force: true }).should('have.value',"127")
      cy.wait(1500)

      //Identificación
      let iden_Arr = [
          "1",
          "2",
          "4",
          "5",            
          "9",            
          "10",            
        ];
      let randomIdentificacion = iden_Arr[Math.floor(Math.random()*iden_Arr.length)];  
      
      cy.xpath("//select[contains(@id,'sinamope:selIdentificacion')]").select(randomIdentificacion, { force: true }).should('have.value',randomIdentificacion)
      cy.wait(tiempo)

      //estado
      cy.xpath("//label[@for='sinamope:j_idt210:1:tipoVerificacion'][contains(.,'Estados')]").should('be.visible').click({force: true})
      cy.wait(tiempo)
      let estado=Math.floor(Math.random() * 2 + 1);

      //Estado
      let estado_Arr = [
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
        ];
      let randomEstado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)];         
      cy.xpath("//select[contains(@id,'sinamope:selEstado')]").select(randomEstado, { force: true }).should('have.value',randomEstado)
      cy.wait(tiempo)

      
    
      cy.get(':nth-child(4) > .col-md-offset-3 > .md1em').should('be.visible').click({force: true})
      cy.wait(tiempo)

      //vehiculo
      let coche_Arr = [
          "Nissan",
          "Ford",
          "Kia",
          "Honda",            
          "Toyota",            
          "Fiat",            
        ];
      let randomCoche = coche_Arr[Math.floor(Math.random()*coche_Arr.length)];  
      cy.xpath("//input[contains(@id,'sinamope:marcaVehiculo')]").type(randomCoche)
      cy.wait(tiempo)
      let pla=Math.floor(Math.random() * 3678 + 11); 
      let placa="rfg-tyr" + pla
      cy.xpath("//input[contains(@id,'sinamope:placaVehiculo')]").should('be.visible').type(placa)
      cy.wait(tiempo)

      //Vehiculo_flejado
      cy.xpath("(//input[contains(@type,'text')])[15]").should('be.visible').type('G247220')
      cy.wait(tiempo)

      //Guardar
      cy.get('#btnGuardarPrecaptura').should('be.visible').click({force: true})
      cy.wait(tiempo)

      //Descripción
      cy.xpath("(//input[contains(@type,'text')])[17]").should('be.visible').type('Descripción demo '+ pla)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'sinamope:btnSiVentanaGuardar')]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      //Resumen
      // cy.xpath("//input[contains(@id,'sinamope:btnResumen')]").should('be.visible').click({force: true})
      // cy.wait(tiempo)
      }       

    })

    it("Test ocho", () =>{
      Cypress.config('defaultCommandTimeout', 40000)
     
      for(let x=1;x<=cantidad;x++)
      {

      cy.visit("https://libssl.senasica.gob.mx/sinamopeWeb/login.xhtml") 
      cy.title().should('eq','GOB.MX - SENASICA')
      cy.wait(tiempo)
          
      

      cy.xpath("(//input[contains(@class,'form-control')])[1]").should("be.visible").type("rolando.camacho.m")
      cy.xpath("(//input[contains(@class,'form-control')])[2]").should("be.visible").type("s3n4202i")
      cy.xpath("//input[contains(@id,'sinamope:btnEntrar')]").should('be.visible').click({force: true})
      cy.wait(1000)
      cy.get('#Movilizacion > .dropdown-toggle').should('be.visible').click({force: true})
      cy.wait(1000)        
      cy.xpath("(//a[@href='#'][contains(.,'Animales')])[1]").should('be.visible').click({force: true})
      cy.xpath("//input[contains(@id,'sinamope:nombreProp')]").should('be.visible').type('CIA. INCUBADORA ESPERANZA S.A C.V')
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'button')])[1]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      //buscar origen
      cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","51159").select("51159")
      cy.wait(tiempo)

     

      cy.xpath("(//a[@href='#'][contains(.,'HERNANDEZ PEREZ CUTBERTO')])[1]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'text')])[2]").should('be.visible').type('CALLE 65 SN COLONIA SANTA CRUZ MEYEHUALCO CP 09290')
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'button')])[2]").should('be.visible').click({force: true})
      cy.wait(tiempo)


      //Buscar Destino
      cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","432302").select("432302")
      cy.wait(tiempo)

      cy.xpath("(//a[@href='#'])[7]").should('be.visible').click({force: true})
      cy.wait(tiempo)


      //Datos movilización animal
      cy.get('[for="sinamope:j_idt165:0:especie"]').should('be.visible').click({force: true})
      cy.wait(tiempo)

      let cantidad_total=Math.floor(Math.random() * 300 + 20); 
      let cantidad_machos=Math.floor(Math.random() * 10); 
      cy.xpath("//input[contains(@id,'sinamope:cantidadTotal')]").should('be.visible').type(cantidad_total)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'sinamope:cantidadMachos')]").should('be.visible').type(cantidad_machos)
      cy.wait(tiempo)

      //Motivo
      let motivo_Arr = [
          "127",
          "128",
          "129",        
        ];
      let randomMotivo = motivo_Arr[Math.floor(Math.random()*motivo_Arr.length)];    

      cy.xpath("//select[contains(@id,'sinamope:selMotivo')]").select("127", { force: true }).should('have.value',"127")
      cy.wait(1500)

      //Identificación
      let iden_Arr = [
          "1",
          "2",
          "4",
          "5",            
          "9",            
          "10",            
        ];
      let randomIdentificacion = iden_Arr[Math.floor(Math.random()*iden_Arr.length)];  
      
      cy.xpath("//select[contains(@id,'sinamope:selIdentificacion')]").select(randomIdentificacion, { force: true }).should('have.value',randomIdentificacion)
      cy.wait(tiempo)

      //estado
      cy.xpath("//label[@for='sinamope:j_idt210:1:tipoVerificacion'][contains(.,'Estados')]").should('be.visible').click({force: true})
      cy.wait(tiempo)
      let estado=Math.floor(Math.random() * 2 + 1);

      //Estado
      let estado_Arr = [
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
        ];
      let randomEstado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)];         
      cy.xpath("//select[contains(@id,'sinamope:selEstado')]").select(randomEstado, { force: true }).should('have.value',randomEstado)
      cy.wait(tiempo)

      
    
      cy.get(':nth-child(4) > .col-md-offset-3 > .md1em').should('be.visible').click({force: true})
      cy.wait(tiempo)

      //vehiculo
      let coche_Arr = [
          "Nissan",
          "Ford",
          "Kia",
          "Honda",            
          "Toyota",            
          "Fiat",            
        ];
      let randomCoche = coche_Arr[Math.floor(Math.random()*coche_Arr.length)];  
      cy.xpath("//input[contains(@id,'sinamope:marcaVehiculo')]").type(randomCoche)
      cy.wait(tiempo)
      let pla=Math.floor(Math.random() * 3678 + 11); 
      let placa="rfg-tyr" + pla
      cy.xpath("//input[contains(@id,'sinamope:placaVehiculo')]").should('be.visible').type(placa)
      cy.wait(tiempo)

      //Vehiculo_flejado
      cy.xpath("(//input[contains(@type,'text')])[15]").should('be.visible').type('G247220')
      cy.wait(tiempo)

      //Guardar
      cy.get('#btnGuardarPrecaptura').should('be.visible').click({force: true})
      cy.wait(tiempo)

      //Descripción
      cy.xpath("(//input[contains(@type,'text')])[17]").should('be.visible').type('Descripción demo '+ pla)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'sinamope:btnSiVentanaGuardar')]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      //Resumen
      // cy.xpath("//input[contains(@id,'sinamope:btnResumen')]").should('be.visible').click({force: true})
      // cy.wait(tiempo)
      }       

    })

    it("Test nueve", () =>{
      Cypress.config('defaultCommandTimeout', 40000)
     
      for(let x=1;x<=cantidad;x++)
      {

      cy.visit("https://libssl.senasica.gob.mx/sinamopeWeb/login.xhtml") 
      cy.title().should('eq','GOB.MX - SENASICA')
      cy.wait(tiempo)
          
      

      cy.xpath("(//input[contains(@class,'form-control')])[1]").should("be.visible").type("rolando.camacho.m")
      cy.xpath("(//input[contains(@class,'form-control')])[2]").should("be.visible").type("s3n4202i")
      cy.xpath("//input[contains(@id,'sinamope:btnEntrar')]").should('be.visible').click({force: true})
      cy.wait(1000)
      cy.get('#Movilizacion > .dropdown-toggle').should('be.visible').click({force: true})
      cy.wait(1000)        
      cy.xpath("(//a[@href='#'][contains(.,'Animales')])[1]").should('be.visible').click({force: true})
      cy.xpath("//input[contains(@id,'sinamope:nombreProp')]").should('be.visible').type('CIA. INCUBADORA ESPERANZA S.A C.V')
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'button')])[1]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      //buscar origen
      cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","51159").select("51159")
      cy.wait(tiempo)

     

      cy.xpath("(//a[@href='#'][contains(.,'HERNANDEZ PEREZ CUTBERTO')])[1]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'text')])[2]").should('be.visible').type('CALLE 65 SN COLONIA SANTA CRUZ MEYEHUALCO CP 09290')
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'button')])[2]").should('be.visible').click({force: true})
      cy.wait(tiempo)


      //Buscar Destino
      cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","432302").select("432302")
      cy.wait(tiempo)

      cy.xpath("(//a[@href='#'])[7]").should('be.visible').click({force: true})
      cy.wait(tiempo)


      //Datos movilización animal
      cy.get('[for="sinamope:j_idt165:0:especie"]').should('be.visible').click({force: true})
      cy.wait(tiempo)

      let cantidad_total=Math.floor(Math.random() * 300 + 20); 
      let cantidad_machos=Math.floor(Math.random() * 10); 
      cy.xpath("//input[contains(@id,'sinamope:cantidadTotal')]").should('be.visible').type(cantidad_total)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'sinamope:cantidadMachos')]").should('be.visible').type(cantidad_machos)
      cy.wait(tiempo)

      //Motivo
      let motivo_Arr = [
          "127",
          "128",
          "129",        
        ];
      let randomMotivo = motivo_Arr[Math.floor(Math.random()*motivo_Arr.length)];    

      cy.xpath("//select[contains(@id,'sinamope:selMotivo')]").select("127", { force: true }).should('have.value',"127")
      cy.wait(1500)

      //Identificación
      let iden_Arr = [
          "1",
          "2",
          "4",
          "5",            
          "9",            
          "10",            
        ];
      let randomIdentificacion = iden_Arr[Math.floor(Math.random()*iden_Arr.length)];  
      
      cy.xpath("//select[contains(@id,'sinamope:selIdentificacion')]").select(randomIdentificacion, { force: true }).should('have.value',randomIdentificacion)
      cy.wait(tiempo)

      //estado
      cy.xpath("//label[@for='sinamope:j_idt210:1:tipoVerificacion'][contains(.,'Estados')]").should('be.visible').click({force: true})
      cy.wait(tiempo)
      let estado=Math.floor(Math.random() * 2 + 1);

      //Estado
      let estado_Arr = [
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
        ];
      let randomEstado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)];         
      cy.xpath("//select[contains(@id,'sinamope:selEstado')]").select(randomEstado, { force: true }).should('have.value',randomEstado)
      cy.wait(tiempo)

      
    
      cy.get(':nth-child(4) > .col-md-offset-3 > .md1em').should('be.visible').click({force: true})
      cy.wait(tiempo)

      //vehiculo
      let coche_Arr = [
          "Nissan",
          "Ford",
          "Kia",
          "Honda",            
          "Toyota",            
          "Fiat",            
        ];
      let randomCoche = coche_Arr[Math.floor(Math.random()*coche_Arr.length)];  
      cy.xpath("//input[contains(@id,'sinamope:marcaVehiculo')]").type(randomCoche)
      cy.wait(tiempo)
      let pla=Math.floor(Math.random() * 3678 + 11); 
      let placa="rfg-tyr" + pla
      cy.xpath("//input[contains(@id,'sinamope:placaVehiculo')]").should('be.visible').type(placa)
      cy.wait(tiempo)

      //Vehiculo_flejado
      cy.xpath("(//input[contains(@type,'text')])[15]").should('be.visible').type('G247220')
      cy.wait(tiempo)

      //Guardar
      cy.get('#btnGuardarPrecaptura').should('be.visible').click({force: true})
      cy.wait(tiempo)

      //Descripción
      cy.xpath("(//input[contains(@type,'text')])[17]").should('be.visible').type('Descripción demo '+ pla)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'sinamope:btnSiVentanaGuardar')]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      //Resumen
      // cy.xpath("//input[contains(@id,'sinamope:btnResumen')]").should('be.visible').click({force: true})
      // cy.wait(tiempo)
      }       

    })

    it("Test diez", () =>{
      Cypress.config('defaultCommandTimeout', 40000)
     
      for(let x=1;x<=cantidad;x++)
      {

      cy.visit("https://libssl.senasica.gob.mx/sinamopeWeb/login.xhtml") 
      cy.title().should('eq','GOB.MX - SENASICA')
      cy.wait(tiempo)
          
      

      cy.xpath("(//input[contains(@class,'form-control')])[1]").should("be.visible").type("rolando.camacho.m")
      cy.xpath("(//input[contains(@class,'form-control')])[2]").should("be.visible").type("s3n4202i")
      cy.xpath("//input[contains(@id,'sinamope:btnEntrar')]").should('be.visible').click({force: true})
      cy.wait(1000)
      cy.get('#Movilizacion > .dropdown-toggle').should('be.visible').click({force: true})
      cy.wait(1000)        
      cy.xpath("(//a[@href='#'][contains(.,'Animales')])[1]").should('be.visible').click({force: true})
      cy.xpath("//input[contains(@id,'sinamope:nombreProp')]").should('be.visible').type('CIA. INCUBADORA ESPERANZA S.A C.V')
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'button')])[1]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      //buscar origen
      cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","51159").select("51159")
      cy.wait(tiempo)

     

      cy.xpath("(//a[@href='#'][contains(.,'HERNANDEZ PEREZ CUTBERTO')])[1]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'text')])[2]").should('be.visible').type('CALLE 65 SN COLONIA SANTA CRUZ MEYEHUALCO CP 09290')
      cy.wait(tiempo)

      cy.xpath("(//input[contains(@type,'button')])[2]").should('be.visible').click({force: true})
      cy.wait(tiempo)


      //Buscar Destino
      cy.xpath("//select[contains(@id,'sinamope:selEmpresa')]").should("be.visible").invoke("val","432302").select("432302")
      cy.wait(tiempo)

      cy.xpath("(//a[@href='#'])[7]").should('be.visible').click({force: true})
      cy.wait(tiempo)


      //Datos movilización animal
      cy.get('[for="sinamope:j_idt165:0:especie"]').should('be.visible').click({force: true})
      cy.wait(tiempo)

      let cantidad_total=Math.floor(Math.random() * 300 + 20); 
      let cantidad_machos=Math.floor(Math.random() * 10); 
      cy.xpath("//input[contains(@id,'sinamope:cantidadTotal')]").should('be.visible').type(cantidad_total)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'sinamope:cantidadMachos')]").should('be.visible').type(cantidad_machos)
      cy.wait(tiempo)

      //Motivo
      let motivo_Arr = [
          "127",
          "128",
          "129",        
        ];
      let randomMotivo = motivo_Arr[Math.floor(Math.random()*motivo_Arr.length)];    

      cy.xpath("//select[contains(@id,'sinamope:selMotivo')]").select("127", { force: true }).should('have.value',"127")
      cy.wait(1500)

      //Identificación
      let iden_Arr = [
          "1",
          "2",
          "4",
          "5",            
          "9",            
          "10",            
        ];
      let randomIdentificacion = iden_Arr[Math.floor(Math.random()*iden_Arr.length)];  
      
      cy.xpath("//select[contains(@id,'sinamope:selIdentificacion')]").select(randomIdentificacion, { force: true }).should('have.value',randomIdentificacion)
      cy.wait(tiempo)

      //estado
      cy.xpath("//label[@for='sinamope:j_idt210:1:tipoVerificacion'][contains(.,'Estados')]").should('be.visible').click({force: true})
      cy.wait(tiempo)
      let estado=Math.floor(Math.random() * 2 + 1);

      //Estado
      let estado_Arr = [
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
        ];
      let randomEstado = estado_Arr[Math.floor(Math.random()*estado_Arr.length)];         
      cy.xpath("//select[contains(@id,'sinamope:selEstado')]").select(randomEstado, { force: true }).should('have.value',randomEstado)
      cy.wait(tiempo)

      
    
      cy.get(':nth-child(4) > .col-md-offset-3 > .md1em').should('be.visible').click({force: true})
      cy.wait(tiempo)

      //vehiculo
      let coche_Arr = [
          "Nissan",
          "Ford",
          "Kia",
          "Honda",            
          "Toyota",            
          "Fiat",            
        ];
      let randomCoche = coche_Arr[Math.floor(Math.random()*coche_Arr.length)];  
      cy.xpath("//input[contains(@id,'sinamope:marcaVehiculo')]").type(randomCoche)
      cy.wait(tiempo)
      let pla=Math.floor(Math.random() * 3678 + 11); 
      let placa="rfg-tyr" + pla
      cy.xpath("//input[contains(@id,'sinamope:placaVehiculo')]").should('be.visible').type(placa)
      cy.wait(tiempo)

      //Vehiculo_flejado
      cy.xpath("(//input[contains(@type,'text')])[15]").should('be.visible').type('G247220')
      cy.wait(tiempo)

      //Guardar
      cy.get('#btnGuardarPrecaptura').should('be.visible').click({force: true})
      cy.wait(tiempo)

      //Descripción
      cy.xpath("(//input[contains(@type,'text')])[17]").should('be.visible').type('Descripción demo '+ pla)
      cy.wait(tiempo)
      cy.xpath("//input[contains(@id,'sinamope:btnSiVentanaGuardar')]").should('be.visible').click({force: true})
      cy.wait(tiempo)

      //Resumen
      // cy.xpath("//input[contains(@id,'sinamope:btnResumen')]").should('be.visible').click({force: true})
      // cy.wait(tiempo)
      }       

    })




})//Cierre de describe