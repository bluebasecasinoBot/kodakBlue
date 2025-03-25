import { __SYD, __c, __sC, __p } from "./sydneyDom_v2.js";


__SYD._p3 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    backgroundColor:'#5AA9E6',
                    // flexDirection:__p(['_p3','__flex'],'row'),
                    justifyContent:'center',
                    alignItems:"center",
                    padding:'20px 10px',
                    // transform:'unset'
                }
            }),
            id:'about'
        },
        [
            __c(
                "div",
                {
                    style:`min-height:80vh;height:100%;width:100%;display:flex;flex-direction:${__p(['_p3','__flex'],'row')};justify-content:flex-start;max-width:1200px;background:#007BFF;border-radius:15px;`
                },
                [
                    __c(
                        'div',
                        {
                            style:`min-height:${__p(['_p3','__size'],'4.5rem') === '4.5rem' ? '80vh' : '300px'};min-width:${__p(['_p3','__size'],'3rem') === '3rem' ? '40%' : '100%'};background-image:url("./assets/kodakLogo3.png");background-size:contain;border-radius:15px;`
                        },
                        [
                            
                        ],
                        {
                            genericStyle:['bg_cover'],
                        }
                    ),
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:20px;padding:20px;'
                        },
                        [
                            __c('h1',{class:'',style:`width:100%;text-align:left;border-left:8px solid #fff;padding-left:10px;font-family:sunrise;font-weight:700;font-size:${__p(['_p3','__size'],'3rem')};color:#fff;`},['ABOUT']),
                            __SYD.about_text(),
                            __SYD.about_text2(),
                            __SYD.buyNowBtn().addAttr({style:"align-self:flex-start;text-decoration:none;"})
                        ]
                    )
                ]       
            )
        ],
        {
            createState:{
                stateName:'_p3',
                state:{__size:'3rem',__flex:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'2rem',__flex:'column'}}],
                defState:{__size:'3rem',__flex:'row'}
            }
        }
    )
}

__SYD.about_text = () =>{
    return __c('p',{style:'font-size:18px;line-height: 1.75rem;text-align:left;font-weight:700;'},[
        `Kodak Blue ain’t just another coin—it’s the ultimate fusion of rap culture and blockchain power. Born from the untouchable energy of Kodak Black, this token is built for hustlers, dreamers, and moon-chasers who know that real moves happen fast.`
    ])
}

__SYD.about_text2 = () =>{
    return __c('p',{style:'font-size:18px;line-height: 1.75rem;text-align:left;font-weight:700;text-indent: 2em;'},[
        `Why blue? Because Basechain glows cyan, and we’re remixing it with Kodak’s signature street vibes. This ain’t your grandma’s crypto—this is a high-speed flex, a statement, a movement.`
    ])
}