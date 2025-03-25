import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v, manage_mediaQuery} from './sydneyDom_v2.js';

import './_body_p1.js';
import './_body_p2.js';
import './_body_p3.js';
import './_body_p4.js';
import './_body_p5.js';
import "./_communityPage.js"

__sS([
    {
        nameTag:'container',
        style:{
            height:'100vh',
            width:'100vw',
            // background:'linear-gradient(to bottom right, #0A0A23 , #000000)',
            backgroundImage:'url(./assets/kodakMainbg.jpeg)',
            backgroundAttachment: 'fixed',
            backgroundPosition:'top center',
            overflowY:'scroll',
            position:'relative',
            // fontFamily:'"Aladin", system-ui',
            // fontFamily:'Mantis Rumble_PersonalUseOnly',
            fontFamily:'sticker',
            // wordSpacing:'5px',
            // fontFamily:'sunrise',
            overflowX:'hidden',
            color:'#fff'
        }
    },
    {
        nameTag:'navBar',
        style:{
            width:'100%',
            display:'flex',
            padding:'5px 20px',
            columnGap:'30px',
            position:'sticky',
            top:'0',
            zIndex:'999',
            alignItems:'center',
            justifyContent:'space-between',
            color:"#fff"
        }
    }
])

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC.container(),
            class:"bg_animation"
        },
        [
            __SYD.navBar(),
            // __SYD._p1(),
            __SYD._p2(),
            __SYD._p3(),
            __SYD.comm(),
            __SYD._p4(),
            __SYD._p5(),
            __c(
                'div',
                {
                    style:'height:fit-content;width:100%;padding:60px;background:#121212;display:flex;align-items:center;flex-direction:column;'
                },
                [
                    __c('p',{style:'font-size: .9rem;font-family:sunrise;line-height: 1.75rem;text-align:center;font-weight:900;color:#fff;width:100vw'},[
                        `© ${new Date().getFullYear()} All Right Reserved by $BLUE`
                    ])
                ]
            )
        ],
        {
            genericStyle:['bg_cover']
        }
    )
}

__SYD.navBar = () =>{
    return __c(
        'div',
        {
            style:__sC.navBar({
                method:'add',
                style:{
                    height:__p(['navBar','_h'],'80px'),
                    // backgroundImage:`url(./assets/nav_bg.png)`,
                    // backgroundPosition:'100% 100%'
                }
            }) + `padding:${__p(['navBar' , 'padd'],true) ? "5px 70px" : "5px 20px"};`,
            class:"navBar"
        },
        [
            __c(
                'div',
                {
                    style:`min-height:50px;min-width:50px;border-radius:50%;background-image:url(./assets/kodakLogo1.png);`
                },[],{genericStyle:['bg_fit']}
            ),
            __c(
                'div',
                {
                    style:`display:${__p(['navBar','__nav_d'],'flex')};width:fit-content;height:fit-content;justify-content:flex-end;column-gap:50px;padding:5px;padding-right:50px;width:100%;`,
                },
                [
                    __SYD.nav_b_text('Home','_p2'),
                    __SYD.nav_b_text('About Us','_p3'),
                    __SYD.nav_b_text('How To Buy','_p4'),
                    __SYD.nav_b_text('Road Map','_p5'),
                ]
            ),
            __SYD.buyNowBtn(),
            __c(
                'div',
                {
                    style:`height:50px;width:50px;background-image:url('./assets/menu.png');display:${__p(['navBar','__nav_d'],'flex') === 'flex' ? 'none' : 'block'};`,class:'click'
                },
                [

                ],
                {
                    events:{
                        onclick:() =>{
                            const mobileMenu = __g('mobileMenu');
                            // console.log(__v['mobileMenu'])
                            switch(mobileMenu._d)
                            {
                                case 'none':
                                    mobileMenu._d = 'flex';
                                    let _t1 = setTimeout(() =>{
                                        const mobileMenu = __g('mobileMenu');
                                        mobileMenu._op = '1';
                                        __u('mobileMenu',{type:'a',value:mobileMenu});
                                        clearTimeout(_t1)
                                    },100);
                                break;
                                case 'flex':
                                    mobileMenu._op = '0'
                                    let _t2 = setTimeout(() =>{
                                        const mobileMenu = __g('mobileMenu');
                                        mobileMenu._d = 'none';
                                        __u('mobileMenu',{type:'a',value:mobileMenu})
                                        clearTimeout(_t2)
                                    },300)
                            }
                            __u('mobileMenu',{type:'a',value:mobileMenu});
                            __v['mobileMenu'].focus();
                        }
                    },
                    genericStyle:['bg_fit']
                }
            ),
            __SYD.mobileMenu()
        ],
        {
            createState:{
                stateName:'navBar',
                state:{_h:'80px',l_size:'100px',padd:true}
            },
            mediaQuery:{
                query:[
                    {size:'<500px',prop:{_h:'80px',l_size:'70px'}},
                    {size:'<800px',prop:{__nav_d:'none'}},
                    {size:'<950px',prop:{padd:false}},
                ],
                defState:{_h:'80px',l_size:'100px',__nav_d:'flex',padd:true}
            },
            genericStyle:['bg_cover']
        }
    )
}

__SYD.buyNowBtn = () =>{
    return __c('a',{href:'https://dexscreener.com/solana/dwqozxmdqdhnkukkr2rft17dpjlai1r92ian6zegs9pu',target:'blank',style:`display:${__p(['navBar','__nav_d'],'block')};text-decoration:none;min-width:fit-content;background-image:url(./assets/btnbg2.png);`,class:'btns_style'},['Buy Now'],{genericStyle:['bg_fit']})
}

__SYD.nav_b_text = (text,click) =>{
    return __c(
        'p',
        {
            style:'font-size:18px;cursor:pointer;font-family:sunrise;font-weight:700;'
        },
        [
            text
        ],
        {
            events:{
                onclick:() =>{
                    switch(true)
                    {
                        case click === 'tefeLink':
                            window.location = 'https://dexscreener.com/solana/dwqozxmdqdhnkukkr2rft17dpjlai1r92ian6zegs9pu'
                        break;
                        default:
                            __v[click].scrollIntoView();
                            __v['mobileMenu'].blur()
                            
                    }
                }
            }
        }
    )
}

__SYD.mobileMenu = () =>{
    return __c(
        'div',
        {
            style:`height:fit-content;width:100%;padding:20px 10px;display:${__p(['mobileMenu','_d'],'none')};flex-direction:column;row-gap:20px;border-radius:10px;border-top-left-radius:unset;border-top-right-radius:unset;position:absolute;top:100%;right:0;opacity:${__p(['mobileMenu','_op'],'0')};transition:opacity .3s linear;`,
            tabindex:'1',
            class:'mobile_menu navBar'
        },
        [
            __SYD.nav_b_text('Home','_p2'),
            __SYD.nav_b_text('About','_p3'),
            __SYD.nav_b_text('Road Map','_p5'),
            __SYD.nav_b_text('How to Buy','_p4'),
            __SYD.buyNowBtn().addAttr({style:"align-self:flex-start;text-decoration:none;min-width:fit-content;background-image:url(./assets/btnbg2.png);"})
            // __SYD.nav_b_text('Buy Now','tefeLink'),

        ],
        {
            createState:{
                stateName:'mobileMenu',
                state:{_d:'none',_op:'0'}
            },
            events:{
                onblur:() =>{
                    const mobileMenu = __g('mobileMenu');
                    console.log('hey')
                    mobileMenu._op = '0'
                    let _t2 = setTimeout(() =>{
                        const mobileMenu = __g('mobileMenu');
                        mobileMenu._d = 'none';
                        __u('mobileMenu',{type:'a',value:mobileMenu})
                        clearTimeout(_t2)
                    },300)
                    __u('mobileMenu',{type:'a',value:mobileMenu})
                }
            }
        }
    )
}

__m(__SYD.container())

window.addEventListener("DOMContentLoaded" , e =>{
    manage_mediaQuery(window.innerWidth)
})