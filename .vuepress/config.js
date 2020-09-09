module.exports = {
 // 站点配置
 title: '汉服百科',
 base:'/wiki/',
 dest:'wiki',
 description: '一个属于汉服的百科，由热爱汉服的同袍共同编写，采用知识共享(CC)协议，纯公益，无商业。',
 plugins: [
   [
     'vuepress-plugin-yuque', {
       repoUrl: 'https://www.yuque.com/hanfubaike/wiki',
       authToken:'Q6DYRecYwc9tEQsWBIjIn5ROhfDWq05agBEG70bg',
       html:'true',
       yuqueLink: true,
       home: {
        actionText: '点击开始 →',
        //actionLink: '/intro/',
        heroImage: 'logo.png',
        footer: `Copyright © 汉服百科兴趣小组`,
        features: [
          { title: '汉服至上',  details:'所有决策、讨论、提议、以及争论都须围绕汉服，以汉服为主、以汉服的利益至上。大家可以有不同立场，但目标必须一致——即汉服复兴。这是一切的前提，也是项目的主要宗旨，认可之后方可参与项目'},
          { title: '学术研究', details: '把汉服当作一门学科，以学术的方式进行系统的研究，并编写词条，每次提交均需提供证明材料，以保证资料的（相对）正确性。同时我们也会邀请一些圈内的前辈对词条进行审核，保证相对的公平和公正。' },
          { title: '百家争鸣', details: '允许多种声音存在。除了大部分人都认可的理念之外，在不违反规则的情况下，每个人都可以通过评论系统、讨论板块等功能合理地发表自己的观点、宣扬自己的理念' },
          { title: '开源公益', details: '项目将始终保持纯公益，完全开源。在注明出处的情况下，任何人都可以引用项目的内容和数据，无需额外授权' },
          { title: '透明公开', details: '项目的运作流程将保持透明公开，任何人都可以自由查看，所有的修改都会保留历史版本，供大家参考和监督' },
          { title: '理性讨论', details: '我们鼓励理性讨论，拒绝站队、贴标签、扣帽子等行为，拒绝任何形式的人身攻击。' },
        ]
      }
     }
   ]
 ],
    head: [
    ['link', { rel: 'icon', href: `https://cdn.nlark.com/yuque/0/2019/png/242808/1549571925285-2372b0a0-0234-421c-a139-00ea16f1a106.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }]
    ],
    themeConfig: {
      repo: 'hanfubaike/',
      nav: [
        { text: '汉服地图', link: 'http://hanfu.wiki/map/' },
        { text: '项目主页', link: 'https://www.yuque.com/hanfubaike' },
        { text: '意见反馈', link: 'https://www.yuque.com/hanfubaike/topics' },
      ]
    },
}