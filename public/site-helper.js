// public/site-helper.js
(function() {
  'use strict';

  const CONFIG = Object.freeze({
    siteUrl: 'https://index-cn-aiyouxi.com.cn',
    keyword: '爱游戏',
    tagColor: '#e91e63',
    cardBg: '#fce4ec'
  });

  const cardData = [
    { title: '热门推荐', desc: '发现最新最热的游戏资讯与攻略' },
    { title: '玩家社区', desc: '加入爱游戏玩家交流圈，分享心得' },
    { title: '福利活动', desc: '每日签到领积分，兑换专属礼包' }
  ];

  function createTagElement(text, color) {
    const span = document.createElement('span');
    span.textContent = text;
    span.style.display = 'inline-block';
    span.style.padding = '4px 12px';
    span.style.margin = '4px';
    span.style.borderRadius = '20px';
    span.style.backgroundColor = color;
    span.style.color = '#fff';
    span.style.fontSize = '14px';
    span.style.fontWeight = '500';
    span.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
    return span;
  }

  function createCardElement(item, bgColor) {
    const card = document.createElement('div');
    card.style.backgroundColor = bgColor;
    card.style.borderRadius = '12px';
    card.style.padding = '20px 24px';
    card.style.margin = '12px 0';
    card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
    card.style.transition = 'transform 0.2s ease';
    card.style.cursor = 'pointer';

    const title = document.createElement('h3');
    title.textContent = item.title;
    title.style.margin = '0 0 8px 0';
    title.style.fontSize = '20px';
    title.style.color = '#333';

    const desc = document.createElement('p');
    desc.textContent = item.desc;
    desc.style.margin = '0';
    desc.style.fontSize = '15px';
    desc.style.color = '#666';
    desc.style.lineHeight = '1.5';

    card.appendChild(title);
    card.appendChild(desc);

    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px)';
    });
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
    card.addEventListener('click', function() {
      window.open(CONFIG.siteUrl, '_blank');
    });

    return card;
  }

  function buildAccessNote() {
    const note = document.createElement('div');
    note.style.marginTop = '24px';
    note.style.padding = '16px 20px';
    note.style.borderLeft = '4px solid #e91e63';
    note.style.backgroundColor = '#fff3f5';
    note.style.borderRadius = '8px';

    const p = document.createElement('p');
    p.style.margin = '0';
    p.style.fontSize = '14px';
    p.style.color = '#555';
    p.innerHTML = '💡 提示：点击任意卡片可直达 <strong>' + CONFIG.siteUrl + '</strong>，探索更多' + CONFIG.keyword + '内容。';

    note.appendChild(p);
    return note;
  }

  function initHelper() {
    var container = document.getElementById('site-helper-root');
    if (!container) {
      container = document.createElement('div');
      container.id = 'site-helper-root';
      container.style.maxWidth = '600px';
      container.style.margin = '40px auto';
      container.style.padding = '20px';
      container.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
      document.body.appendChild(container);
    }

    var heading = document.createElement('h2');
    heading.textContent = CONFIG.keyword + ' · 站点导航';
    heading.style.textAlign = 'center';
    heading.style.color = '#333';
    heading.style.marginBottom = '20px';
    heading.style.fontSize = '26px';
    container.appendChild(heading);

    var tagRow = document.createElement('div');
    tagRow.style.textAlign = 'center';
    tagRow.style.marginBottom = '20px';
    var tags = ['爱游戏', '新游推荐', '攻略', '礼包', '社区'];
    tags.forEach(function(t) {
      tagRow.appendChild(createTagElement(t, CONFIG.tagColor));
    });
    container.appendChild(tagRow);

    cardData.forEach(function(item) {
      container.appendChild(createCardElement(item, CONFIG.cardBg));
    });

    container.appendChild(buildAccessNote());

    var footer = document.createElement('p');
    footer.style.textAlign = 'center';
    footer.style.marginTop = '30px';
    footer.style.fontSize = '12px';
    footer.style.color = '#aaa';
    footer.textContent = '© ' + new Date().getFullYear() + ' ' + CONFIG.siteUrl + ' | 数据仅作展示';
    container.appendChild(footer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHelper);
  } else {
    initHelper();
  }
})();