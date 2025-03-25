import { __c , __SYD, __sC, __p} from "./sydneyDom_v2.js"



__SYD._p4 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    justifyContent:'flex-start',
                    paddingLeft:'30px',
                    paddingRight:'30px',
                    background:'transparent',
                    padding:'70px 10px',
                }
            }),
            id:'buyGuide'
        },
        [
            __c('h1',{class:"" , style:`color:#00AEEF;font-family:sunrise;font-weight:900;padding:10px 0;font-weight:700;font-size:${__p(['_p4','__size'],'4rem')}`},['How To Buy']),
            __SYD.how_to_buy_opening(),
            __SYD.buy_tabs(
                {content:`Make sure you have (ETH) in your wallet. You can buy ETH on exchanges like Binance, Coinbase, or Kraken, then transfer it to your wallet.` ,title:`Get Some Basechain ETH` , index:"01"}
            ),
            __SYD.buy_tabs({
                content:`Use Metamask, Trust Wallet, or any Base-supported wallet.`,title:`Connect Your Wallet`,
                index:"02"
            }),
            __SYD.buy_tabs({
                content:`Find Kodak Blue on Base DEXs and swap your ETH for the bluest meme coin in the game.`,title:`Swap for Kodak Blue `,index:"03"
            }),
            __SYD.buy_tabs({
                content:`Whether you're flipping or flexing, Kodak Blue is your ticket to the crypto streets.`,title:`Stack, Trade, or Hodl`,
                index:"04"
            })
        ],
        {
            createState:{
                stateName:'_p4',
                state:{__size:'4.5rem',__flex_child:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'3rem'}},{size:'<700px',prop:{__flex_child:'column'}}],
                defState:{__size:'4.5rem',__flex_child:'row'}
            }
        }
    )
}

__SYD.buy_tabs = ({title = '' , content = '' , index = "01"}) =>{
    return __c(
        'div',
        {
            style:'width:100%;max-width:1000px;height:fit-content;border-radius:30px;',
            class:"tabs_3d"
        },
        [
            __c(
                'div',
                {
                    style:`height:fit-content;min-height:250px;padding:10px 20px;width:100%;background:unset;display:flex;align-items:${__p(['_p4','__flex_child'],'row') === 'row' ? 'center' : 'flex-start'};column-gap:20px;row-gap:20px;flex-direction:${__p(['_p4','__flex_child'],'row')};`
                },
                [
                    __c('div',{style:'min-height:100px;min-width:100px;font-size:60px;-webkit-text-stroke:3px #00AEEF;color:transparent;'},[index]),
                    __c(
                        'div',
                        {
                            style:'width:100%'
                        },
                        [
                            __c('p',{style:'font-size:28px;text-align:left;text-transform:capitalize;color:#fff;font-family:sunrise;font-weight:900;margin-bottom:15px;'},[title]),
                            __c('p',{style:'font-size: 1.2rem;line-height: 1.75rem;text-align:left;font-weight:100;color:#fff'},[
                                content
                            ])
                        ]
                    )
                ]
            )
        ]
    )
}

__SYD.how_to_buy_opening = () =>{
    return __c('p',{style:'font-size:18px;line-height: 1.75rem;text-align:center;max-width:500px;font-weight:700;'},[
        `Getting Kodak Blue is easy. Load up on Base ETH, swap on a Base DEX, and boom—you’re part of the movement. Stack it, flex it, or ride it to the moon. 🌊💎`
    ])
}