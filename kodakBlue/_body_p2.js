import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v, createElement} from './sydneyDom_v2.js';

__sS(
    {
        nameTag:'_social_style',
        style:{
            minHeight:'60px',
            minWidth:'60px',
            cursor:'pointer',
            borderRadius:'50%',
            backgroundColor:"#007BFF",
            borderRadius:"15px",
            backgroundSize:"60%"
            
        }
    }
)

__SYD._p2 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    flexDirection:__p(['_p2','_flex'],'row'),
                    transform:'unset',
                    marginBottom:'20px',
                    alignItems:'flex-start'
                }
            })
        },
        [
            __c(
                'div',
                {
                    style:`min-height:fit-content;height:100%;width:${__p(['_p2','_flex'],'row') === 'row' ? '60%' : '100%'};background:unset;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:20px;padding:0 10px;`
                },
                [
                    __c(
                        "div",
                        {
                            style:"padding:0 15px;padding-top:70px;display:flex;flex-direction:column;row-gap:40px;"
                        },
                        [
                            __c('h1',{class:'',style:`color:#00AEEF;font-weight:900;text-align:left;width:100%;font-family:sunrise;font-size:${__p(['_p2','__font'],{1:'70px'})['1']};`},['KODAK BLUE']),
                            __SYD.about_text_p2(),
                            __SYD.KodakBlue_learnMore(),
                            __SYD.btns__dex_buy(),
                            
                        ]
                    ),
                ]
            ),
            __c(
                'div',
                {
                    style:`min-height:${__p(['_p2','_flex'],'row') === 'row' ? '80vh' : '300px'};width:${__p(['_p2','_flex'],'row') === 'row' ? '40%' : '100%'};background-image:url("./assets/kodakLogo2.png");background-size:contain;`,class:"floatMainPic"//url("./assets/goatx.jpg")
                },[],
                {
                    genericStyle:[__p(['_p2','_flex'],'row') === 'row' ? 'bg_cover' : 'bg_fit'],
                }
            ),
        ],
        {
            createState:{
                stateName:'_p2',
                state:{_flex:'row',__font:{1:'70px',2:'50px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{_flex:'column-reverse',__font:{1:'30px',2:'20px'}}}],
                defState:{_flex:'row',__font:{1:'70px',2:'50px'}}
            }
        }
    )
}

__SYD.btns__dex_buy = () =>{
    return __c(
        'div',
        {
            style:'width:100%;padding:10px 0;display:flex;justify-content:flex-start;align-items:center;gap:20px;flex-wrap:wrap'
        },
        [
            __c(
                'a',{href:'https://dexscreener.com/solana/dwqozxmdqdhnkukkr2rft17dpjlai1r92ian6zegs9pu',target:'blank',style:`text-decoration:none;min-width:fit-content;`,class:'btns_style'},['Buy Token'],{genericStyle:['bg_fit']}
            ),
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

__SYD.KodakBlue_learnMore = () =>{
    return __c(
        "div",
        {
            style:`display:flex;flex-direction:row;width:100%;height:fit-content;gap:20px;padding:10px;padding-left:0px;flex-wrap:${__p(['KodakBlue_learnMore' , 'wrap'],"no-wrap")}`
        },
        [
            __c(
                "div",
                {
                    style:"height:fit-content;min-height:20px;width:100%;display:flex;flex-direction:row;gap:10px;align-items:flex-start;padding:5px;"
                },
                [
                    __c("span" , {style:"min-height:30px;min-width:30px;background-image:url(./assets/globe.png);"},[],{genericStyle:['bg_fit']}),
                    __c("p" , {style:"font-weight:700;text-align:left;"} , ["Kodak ain’t just a rapper—he’s a whole wave."])
                ]
            ),
            __c(
                "div",
                {
                    style:"height:fit-content;min-height:20px;width:100%;display:flex;flex-direction:row;gap:10px;align-items:flex-start;padding:5px;"
                },
                [
                    __c("span" , {style:"min-height:30px;min-width:30px;background-image:url(./assets/globe.png);"},[],{genericStyle:['bg_fit']}),
                    __c("p" , {style:"font-weight:700;text-align:left;"} , ["From the studio to the blockchain, Kodak Black is always ahead."])
                ]
            )
        ],
        {
            createState:{
                stateName:"KodakBlue_learnMore",
                state:{wrap:"no-wrap"}
            },
            mediaQuery:{
                query:[
                    {size:'<500px',prop:{wrap:"wrap"}},
                    {size:'>500px',prop:{wrap:"no-wrap"}},
                ],
                defState:{
                    wrap:"no-wrap"
                }
            }
        }
    )
}

__SYD.about_text_p2= () =>{
    return __c('p',{style:'font-size: 18px;line-height: 1.75rem;text-align:left;font-weight:700;width:100%;color:#fff;'},[
        `Welcome to Kodak Blue the slickest, bluest meme, coin, splashing onto basechain , straight Outta the genius of rap King, Kodak, Black spelled, K-O-D-A-K this ain’t just a coin it’s A vibe .`
    ])
}
