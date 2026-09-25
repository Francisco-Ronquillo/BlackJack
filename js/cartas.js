class cartas{
    constructor(){
        this.pi=[]
        this.ig=[]
        this.bi=[]
        this.p=[]
        this.ps=[]
        this.cf=[]
        this.sf=[]
        this.b=[]
        this.bs=[]
        this.rb=0
        this.rp=0
    }
    empezar(){
        let cartas=["Asb","2b","3b","4b","5b","6b","7b","8b","9b","10b","Jb","Qb","Kb","Asc","2c","3c","4c","5c","6c","7c","8c","9c","10c","Jc","Qc","Kc","Ast","2t","3t","4t","5t","6t","7t","8t","9t","10t","Jt","Qt","Kt","Asp","2p","3p","4p","5p","6p","7p","8p","9p","10p","Jp","Qp","Kp"]
        let cartassuma=[1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10]
        let imgcart=['image/ASBRILLO.png','image/2BRILLO.png','image/3BRILLO.png','image/4BRILLO.png','image/5BRILLO.png','image/6BRILLO.png','image/7BRILLO.png','image/8BRILLO.png','image/9BRILLO.png','image/10BRILLO.png','image/JBRILLO.png','image/QBRILLO.png','image/KBRILLO.png','image/ASCORAZON.png','image/2CORAZON.png','image/3CORAZON.png','image/4CORAZON.png','image/5CORAZON.png','image/6CORAZON.png','image/7CORAZON.png','image/8CORAZON.png','image/9CORAZON.png','image/10CORAZON.png','image/JCORAZON.png','image/QCORAZON.png','image/KCORAZON.png','image/ASTREBOL.png','image/2TREBOL.png','image/3TREBOL.png','image/4TREBOL.png','image/5TREBOL.png','image/6TREBOL.png','image/7TREBOL.png','image/8TREBOL.png','image/9TREBOL.png','image/10TREBOL.png','image/JTREBOL.png','image/QTREBOL.png','image/KTREBOL.png','image/AScoraNEGRO.png','image/2coraNEGRO.png','image/3coraNEGRO.png','image/4coraNEGRO.png','image/5coraNEGRO.png','image/6coraNEGRO.png','image/7coraNEGRO.png','image/8coraNEGRO.png','image/9coraNEGRO.png','image/10coraNEGRO.png','image/JcoraNEGRO.png','image/QcoraNEGRO.png','image/KcoraNEGRO.png']
        let player=[]
        let bootimg=[]
        let playerimg=[]
        let cartimg=[]
        let carteli=[]
        let sumaeli=[]
        let playersuma=[]
        let sumap=0
        let sumab=0
        let cartfinal=[]
        let sumafinal=[]
        let cartimgaf=[]
        let numerospla=[]
        let boot=[]
        let numerosbo=[]
        let bootsuma=[]
        let c=0
        let w=0
        while(c<2){
            let numero=parseInt(Math.random()*parseInt(cartas.length-1))
           console.log("ingrese")
            if(player.length==0){
                player.push(cartas[numero])
                playerimg.push(imgcart[numero])
                numerospla.push(numero)
                playersuma.push(cartassuma[numero])
                c+=1
            }else{
                if(cartas[numero]!=player[0]){
                    player.push(cartas[numero])
                    playerimg.push(imgcart[numero])
                    numerospla.push(numero)
                    playersuma.push(cartassuma[numero])
                    c+=1  
                }
            }
          
            
        }
        console.log(player)
        for(let a=0;a<playersuma.length;a++){
            sumap+=parseInt(playersuma[a])
        }
        if(parseInt(numerospla[0])>parseInt(numerospla[1])){
            for(let d=0;d<numerospla[1];d++){
                carteli.push(cartas[d])
                cartimg.push(imgcart[d])
                sumaeli.push(cartassuma[d])
            }
            for(let d=numerospla[1]+1;d<numerospla[0];d++){
                carteli.push(cartas[d])
                cartimg.push(imgcart[d])
                sumaeli.push(cartassuma[d])
            }
            for(let d=numerospla[0]+1;d<cartas.length;d++){
                carteli.push(cartas[d])
                cartimg.push(imgcart[d])
                sumaeli.push(cartassuma[d])
            }
        }else{
            for(let z=0;z<numerospla[0];z++){
                carteli.push(cartas[z])
                cartimg.push(imgcart[z])
                sumaeli.push(cartassuma[z])
            }
            for(let z=numerospla[0]+1;z<numerospla[1];z++){
                carteli.push(cartas[z])
                cartimg.push(imgcart[z])
                sumaeli.push(cartassuma[z])
            }
            for(let z=numerospla[1]+1;z<cartas.length;z++){
                carteli.push(cartas[z])
                cartimg.push(imgcart[z])
                sumaeli.push(cartassuma[z])
            }

        }
        while(w<2){
            console.log("ingrese boot")
            let numero=parseInt(Math.random()*parseInt(carteli.length-1))
            if(boot.length==0){
                boot.push(carteli[numero])
                bootimg.push(cartimg[numero])
                numerosbo.push(numero)
                bootsuma.push(sumaeli[numero])
                w+=1
            }else{
                if(carteli[numero]!=boot[0]){
                    boot.push(carteli[numero])
                    bootimg.push(cartimg[numero])
                    numerosbo.push(numero)
                    bootsuma.push(sumaeli[numero])
                    w+=1 
                }
            }
           
        }
        console.log(boot)
        for(let a=0;a<bootsuma.length;a++){
            sumab+=parseInt(bootsuma[a])
        }
        if(parseInt(numerosbo[0])>parseInt(numerosbo[1])){
            for(let d=0;d<numerosbo[1];d++){
                cartfinal.push(carteli[d])
                cartimgaf.push(cartimg[d])
                sumafinal.push(sumaeli[d])
            }
            for(let d=numerosbo[1]+1;d<numerosbo[0];d++){
                cartfinal.push(carteli[d])
                cartimgaf.push(cartimg[d])
                sumafinal.push(sumaeli[d])
            }
            for(let d=numerosbo[0]+1;d<carteli.length;d++){
                cartfinal.push(carteli[d])
                cartimgaf.push(cartimg[d])
                sumafinal.push(sumaeli[d])
            }
        }else{
            for(let d=0;d<numerosbo[0];d++){
                cartfinal.push(carteli[d])
                cartimgaf.push(cartimg[d])
                sumafinal.push(sumaeli[d])
            }
            for(let d=numerosbo[0]+1;d<numerosbo[1];d++){
                cartfinal.push(carteli[d])
                cartimgaf.push(cartimg[d])
                sumafinal.push(sumaeli[d])
            }
            for(let d=numerosbo[1]+1;d<carteli.length;d++){
                cartfinal.push(carteli[d])
                cartimgaf.push(cartimg[d])
                sumafinal.push(sumaeli[d])
            }
        }
       this.rb=sumab
       this.p=player
       this.pi=playerimg
       this.ps=playersuma
       this.cf=cartfinal
       this.ig=cartimgaf
       this.sf=sumafinal
       this.b=boot
       this.bi=bootimg
       this.bs=bootsuma
       this.rp=sumap
       let resp=document.getElementById("player")
       resp.textContent=`${sumap}`
       let resp2=document.getElementById("boot")
       resp2.textContent=`${sumab}`
    }

    jugador(){
        let cartasjugador= this.p
        let sumajugador=this.ps
        let imagenjugador=this.pi
        let cartaimagen=this.ig
        let cartassobrantes=this.cf
        console.log(cartassobrantes.length)
        let sumacartas=this.sf
        let x=0
        let sumaplay=0
        let aux=[]
        let aux2=[]
        let aux3=[]
        let resp=document.getElementById("resp")
        if(cartassobrantes==0){
            resp.textContent=`Ya no hay cartas en la baraja`

        }else{
            if(cartasjugador.length==0){
                resp.textContent=`Primero necesitas tener 2 cartas, por favor dale a empezar`
            }else{
                while(x<1){
                    let numero=parseInt(Math.random()*parseInt(cartassobrantes.length-1))
                    cartasjugador.push(cartassobrantes[numero])
                    console.log(cartasjugador)
                    imagenjugador.push(cartaimagen[numero])
                    sumajugador.push(sumacartas[numero])
                    for( let i=0;i<numero;i++){
                        aux.push(cartassobrantes[i])
                        aux2.push(sumacartas[i])
                        aux3.push(cartaimagen[i])
                    }
                    for(let d=numero+1;d<cartassobrantes.length;d++){
                        aux.push(cartassobrantes[d])
                        aux2.push(sumacartas[d])
                        aux3.push(cartaimagen[d])
                    }
                    x+=1
                }
                for(let a=0;a<sumajugador.length;a++){
                    sumaplay+=parseInt(sumajugador[a])
                }
                let resp=document.getElementById("player")
                resp.textContent=`${sumaplay}`
               
    
            }
        }
        this.ig=aux3
        this.rp=sumaplay
        this.cf=aux
        this.sf=aux2
       
        
    }
    boot(){
        let cartasboot=this.b
        let sumabot=this.bs
        let imgbot=this.bi
        let puntos=this.rb
        let imagencartas=this.ig
        let cartassobrantes=this.cf
        console.log(cartassobrantes.length)
        let sumacartas=this.sf
        let x=0
        let sumaboot=0
        let aux=[]
        let aux2=[]
        let aux3=[]
        let resp=document.getElementById("resp")
        if(cartassobrantes.length==0){
            resp.textContent=`Ya no hay cartas en la baraja`
        }else{
            if(cartasboot.length==0){ 
                resp.textContent=`Primero necesitas tener 2 cartas, por favor dale a empezar`
            }else{
                if(puntos<17){
                    while(x<1){
                        let numero=parseInt(Math.random()*parseInt(cartassobrantes.length-1))
                        cartasboot.push(cartassobrantes[numero])
                        imgbot.push(imagencartas[numero])
                        console.log(cartasboot)
                        sumabot.push(sumacartas[numero])
                        for( let i=0;i<numero;i++){
                            aux.push(cartassobrantes[i])
                            aux2.push(sumacartas[i])
                            aux3.push(imagencartas[i])
                        }
                        for(let d=numero+1;d<cartassobrantes.length;d++){
                            aux.push(cartassobrantes[d])
                            aux2.push(sumacartas[d])
                            aux3.push(imagencartas[d])
                        }
                        x+=1
                    }
                    for(let a=0;a<sumabot.length;a++){
                        sumaboot+=parseInt(sumabot[a])
                    }
                    let resp=document.getElementById("boot")
                    resp.textContent=`${sumaboot}`
                    this.ig=aux3
                    this.rb=sumaboot
                    this.cf=aux
                    this.sf=aux2
        
                }else{
                    resp.textContent=`El bot ya no va mas`
                    this.ig=imagencartas
                    this.cf=cartassobrantes
                    this.sf=sumacartas

                }
                
            }
        }
        
        
       

    }
    terminar(){
        let sumaplay=this.rp
        let cart=['image/2BRILLO.png','image/3BRILLO.png']
        let sumaboot=this.rb
        let cartasi=document.getElementById("cart")
        let cartasp=this.p
        let imagp=this.pi
        let imagb=this.bi
        let cartasb=this.b
        let resp=document.getElementById("resp")
        let sp=(21-sumaplay)
        console.log(sp)
        let sb=(21-sumaboot)
        console.log(sb)
        if(sp==0 && sb!=0){
            resp.innerHTML=`El ganador es el jugador con las cartas  ${cartasp}`
            for(let i=0;i<imagp.length;i++){
                let  creaimg=document.createElement('img')
                creaimg.setAttribute('src',imagp[i])
                cartasi.appendChild(creaimg)
            }


        }else{ 
           if(sp!=0 && sb==0){
            resp.innerHTML=`El ganador es el boot con las cartas  ${cartasb}`
            for(let i=0;i<imagb.length;i++){
                let  creaimg=document.createElement('img')
                creaimg.setAttribute('src',imagb[i])
                cartasi.appendChild(creaimg)
            }
           }else{
                if(sb<0 && sp>0){
                  resp.innerHTML=`El ganador es el jugador con las cartas ${cartasp}`
                    for(let i=0;i<imagp.length;i++){
                      let  creaimg=document.createElement('img')
                      creaimg.setAttribute('src',imagp[i])
                      cartasi.appendChild(creaimg)
                    }
                }else{
                    if(sp<0 && sb>0){
                     resp.innerHTML=`El ganador es el boot con las cartas ${cartasb}`
                     for(let i=0;i<imagb.length;i++){
                        let  creaimg=document.createElement('img')
                        creaimg.setAttribute('src',imagb[i])
                        cartasi.appendChild(creaimg)
                      }
        
                    }else{
                        if(sp<sb && sp>0 && sb>0){
                            resp.innerHTML=`El ganador es el jugador con las cartas ${cartasp}`
                            for(let i=0;i<imagp.length;i++){
                              let  creaimg=document.createElement('img')
                              creaimg.setAttribute('src',imagp[i])
                              cartasi.appendChild(creaimg)
                            }
                        }else{
                            if(sb<sp && sp>0 && sb>0){
                                resp.innerHTML=`El ganador es el boot con las cartas ${cartasb}`
                                for(let i=0;i<imagb.length;i++){
                                    let  creaimg=document.createElement('img')
                                    creaimg.setAttribute('src',imagb[i])
                                    cartasi.appendChild(creaimg)
                                }
                            }else{
                                if(sb==sp && sp>0 && sb>0){
                                  resp.innerHTML=`Es un empate`

                                }else{
                                    resp.innerHTML=`Ambos pierden`
                                }
                                
                            }
                        }
                       

                    }
                }
            }

        }



    }
}const Cartas=new cartas()