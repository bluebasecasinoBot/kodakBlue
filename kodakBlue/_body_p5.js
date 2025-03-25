import { __c , __SYD, __sC, __p} from "./sydneyDom_v2.js"

__SYD._p5 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    backgroundColor:'#171717',
                    flexDirection:__p(['_p5','__flex'],'row'),
                    justifyContent:'flex-start',
                    padding:'70px 10px',
                    minHeight:'unset',
                    color:'#fff'
                    // transform:'unset'
                }
            }),
            id:'tokenomics'
        },
        [
            __c(
                'div',
                {
                    style:'width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:left;padding-left:10px;gap:25px;'
                },
                [
                    // __c('h1',{style:`width:100%;text-align:center;font-weight:900;font-weight:700;font-size:${__p(['_p5','__size'],'4rem')};width:100%;font-family:sunrise;margin-bottom:10px;color:#00AEEF;` , class:""},['Our Tokenomics']),
                    // __SYD.tokenomic_opening(),
                    // __c(
                    //     "div",
                    //     {
                    //         style:"height:fit-content;width:100%;display:flex;flex-wrap:wrap;column-gap:25px;row-gap:40px;justify-content:center;"
                    //     },
                    //     [
                    //         __SYD.flex_chart_container(),
                    //         __SYD.tokenomics_spec1(),
                    //         __SYD.tokenomics_spec2()
                    //     ]
                    // ),
                    __c(
                        'div',
                        {
                            style:'width:fit-content;display:flex;justify-content:center;align-items:center;flex-direction:column;text-align:center;padding-left:10px;row-gap:25px;margin-top:0px;'
                        },
                        [
                            __c('h1',{style:`font-weight:900;font-weight:700;font-size:${__p(['_p5','__size'],'4rem')};width:100%;font-family:sunrise;margin-bottom:10px;` , class:"headers_clr"},['Road Map']),
                            __SYD.about_text_tokenomics('🔥 LAUNCH $BLUE 🚀🔵'),
                            __SYD.about_text_tokenomics('🤝 GADER MA HOMIES 🏴‍☠️💙'),
                            __SYD.about_text_tokenomics('🌙 WE PAINTING DA MOON BLUE DWAGS 🎨🐺🔵'),
                        ]
                    )
                ]
            )
        ],
        {
            createState:{
                stateName:'_p5',
                state:{__size:'4.5rem',__flex:'row',widthScale:false}
            },
            mediaQuery:{
                query:[
                    {size:'<900px',prop:{__size:'3rem',__flex:'column'}},
                    {size:'<600px' , prop:{widthScale:true}}
                ],
                defState:{__size:'4.5rem',__flex:'row',widthScale:false}
            }
        }
    )
}

__SYD.flex_chart_container = () =>{
    return __c(
        "div",
        {
            style:`height:400px;width:30%;flex:.4;min-width:${__p(['_p5' , 'widthScale'],false) ? "100%" : "400px"};display:flex;justify-content:center;background-image:url(./assets/chart.png);background-size:60%;background-position:center top;`
        },
        [
            // __c("div" , {style:"width:100%;height:100%" , src:""})
        ],{
            genericStyle:["bg_cover"]
        }
    )
}

__SYD.tokenomics_spec1 = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:30%;background:transparent;flex:.3;min-width:${__p(['_p5' , 'widthScale'],false) ? "100%" : "300px"};display:flex;flex-direction:column;gap:20px;`
        },
        [
            __SYD.tokenomics_spec1__child({clr:"rgb(255, 182, 0)" , t1:"45%" , t2:"some text here"}),
            __SYD.tokenomics_spec1__child({clr:"rgb(230, 99, 146)" , t1:"25%" , t2:"some text here"}),
            __SYD.tokenomics_spec1__child({clr:"rgb(42, 205, 114)" , t1:"20%" , t2:"some text here"}),
            __SYD.tokenomics_spec1__child({clr:"rgb(30, 184, 224)" , t1:"15%" , t2:"some text here"}),
        ]
    )
}

__SYD.tokenomics_spec2 = () =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:30%;border-radius:15px;flex:.3;min-width:${__p(['_p5' , 'widthScale'],false) ? "100%" : "300px"}`,
            class:"navBar"
        },
        [
            __SYD.tokenomics_spec2__child({img:"star.png" , t1:"12B" , t2:"TOTAL SUPPLY"}),
            __SYD.tokenomics_spec2__child({img:"star.png" , t1:"10%" , t2:"BURNT TOKENS"}),
        ]
    )
}

__SYD.tokenomics_spec1__child = ({clr = "red" , t1 = "" , t2 = ""} = {}) =>{
    return __c(
        "div",
        {
            style:"display:flex;gap:10px;align-items:center;padding:10px;"
        },
        [
            __c("span" , {style:`min-height:30px;min-width:30px;max-height:30px;max-width:30px;border-radius:50%;border:7px solid ${clr}`}),
            __c(
                "div",
                {
                    style:"display:flex;flex-direction:column;gap:10px;"
                },
                [
                    __c("p" , {style:"font-weight:900;font-size:22px;"},[t1]),
                    __c("p" , {style:"font-weight:700;font-size:18px;"},[t2])
                ]
            )
        ]
    )
}

__SYD.tokenomics_spec2__child = ({img = "" , t1 = "" , t2 = ""} = {}) =>{
    return __c(
        "div",
        {
            style:"display:flex;gap:20px;align-items:center;padding:10px;"
        },
        [
            __c("span" , {style:`min-height:30px;min-width:30px;max-height:30px;max-width:30px;background-image:url(./assets/${img})`},[],{genericStyle:['bg_fit']}),
            __c(
                "div",
                {
                    style:"display:flex;flex-direction:column;gap:15px;"
                },
                [
                    __c("p" , {style:"font-weight:900;font-size:25px;opacity:1;"},[t1]),
                    __c("p" , {style:"font-weight:700;font-size:22px;opacity:1;"},[t2])
                ]
            )
        ]
    )
}

__SYD.about_text_tokenomics = (text) =>{
    return __c('p',{style:'font-size: 18px;line-height: 1.75rem;text-align:left;font-weight:100;width:100%'},[
        text
    ])
}

__SYD.tokenomic_opening = () =>{
    return __c('p',{style:'font-size:18px;line-height: 1.75rem;text-align:center;max-width:700px;font-weight:700;'},[
        `Straight facts, no cap. Kodak Blue is built for speed, transparency, and community power. No whales, no rugs—just pure Basechain energy. 🚀💙`
    ])
}
