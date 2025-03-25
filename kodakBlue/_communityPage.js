import { __SYD, __c, __sC, __p } from "./sydneyDom_v2.js";


__SYD.comm = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    backgroundColor:'transparent',
                    // flexDirection:__p(['comm','__flex'],'row'),
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
                    style:`min-height:80vh;height:100%;width:100%;display:flex;flex-direction:${__p(['comm','__flex'],'row')};justify-content:flex-start;max-width:1600px;background:#007BFF;border-radius:15px;`
                },
                [
                    __c(
                        'div',
                        {
                            style:`min-height:${__p(['comm','__size'],'4.5rem') === '4.5rem' ? '80vh' : '300px'};min-width:${__p(['comm','__size'],'3rem') === '3rem' ? '60%' : '100%'};border-radius:15px;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:20px;padding:20px 30px;`
                        },
                        [
                            __SYD.ca_section()
                        ]
                    ),
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;gap:20px;padding:20px 30px;background:#000;border-radius:inherit;border-top-left-radius:unset;border-bottom-left-radius:unset;'
                        },
                        [
                            __c('h1',{class:'',style:`width:100%;text-align:left;border-left:8px solid #00AEEF;padding-left:10px;font-family:sunrise;font-weight:700;font-size:${__p(['comm','__size'],'3rem')};color:#00AEEF;`},['Join Our Community']),
                            __SYD.comm_text(),
                            __SYD.page1Socials()
                        ]
                    )
                ]       
            )
        ],
        {
            createState:{
                stateName:'comm',
                state:{__size:'3rem',__flex:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'2rem',__flex:'column'}}],
                defState:{__size:'3rem',__flex:'row'}
            }
        }
    )
}

__SYD.comm_text = () =>{
    return __c('p',{style:'font-size:18px;line-height: 1.75rem;text-align:left;font-weight:700;color:#fff;'},[
        `🔵 Kodak Blue ain’t just a token—it’s a family. From the streets to the blockchain, we ride together, stack together, and moon together. Jump in, connect with the crew, and let’s paint Basechain blue! 🌊🚀`
    ])
}

__SYD.page1Socials = () =>{
    return __c(
        'div',
        {
            style:'width:100%;padding:10px 0;display:flex;justify-content:flex-start;align-items:center;column-gap:20px;row-gap:20px;flex-wrap:wrap'
        },
        [
            __SYD.page1SocialBtn({contentSrc:'dex' , link:location.href}),
            __SYD.page1SocialBtn({contentSrc:'tel' , link:"https://t.me/tefegame"}),
            __SYD.page1SocialBtn({contentSrc:'x'})
        ]
    )
}

__SYD.page1SocialBtn = ({contentSrc,link = '#'}) =>{
    return __c(
        'div',
        {
            style:__sC._social_style({method:'add',style:{backgroundImage:`url('./assets/${contentSrc}.png')`}}),
            class:'click'
        },
        [],
        {
            genericStyle:['bg_fit'],
            events:{
                onclick:() =>{
                    window.location = link
                }
            }
        }
    )
}

__SYD.ca_section = () =>{
    return __c(
        'div',
        {style:'display:flex;flex-direction:column;width:100%;gap:20px;align-items:center;text-align:left'},
        [
            __c('h1',{class:'',style:`width:100%;text-align:left;border-left:8px solid #fff;padding-left:10px;font-family:sunrise;font-weight:700;font-size:${__p(['comm','__size'],'3rem')};color:#fff;`},['Contract Address']),
            __c(
                'div',
                {
                    style:`padding:30px 10px;width:100%;font-family:sticker;font-size:${__p(['_p2','_flex'],'row') === 'row' ? '20px' : '13px'};font-weight:900;text-align:center;cursor:pointer;color:#fff;border-radius:15px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;`,
                    class:"ca_button_3d"
                },
                [
                    '0x1852B16e564f5413C45986D13442791B08C9D3B8'
    
                ],
                {
                    events:{
                        onclick:() =>{
                            navigator.clipboard.writeText('0x1852B16e564f5413C45986D13442791B08C9D3B8')
                            __v['c_a'].textContent = 'Contract Address Copied'
    
                            const timer = setTimeout(() =>{
                            __v['c_a'].textContent = '0x1852B16e564f5413C45986D13442791B08C9D3B8'
                            clearTimeout(timer)
                            },1500)
                        }
                    },
                    type:'c_a'
                }
            ),
            __c('h1',{class:'',style:`width:100%;text-align:left;border-left:8px solid #fff;padding-left:10px;font-family:sunrise;font-weight:700;font-size:${__p(['comm','__size'],'3rem')};color:#fff;`},['Buy Coin Now']),
        ]
    )
}