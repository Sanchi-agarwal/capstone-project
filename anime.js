document.addEventListener('DOMContentLoaded', ()=>{

  const initialData = [
    { title:"Stranger Things", type:"Web Series", genre:"Sci-Fi", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMt6rwQWR0PWv1tdG2aXZnnK-ijZ9DyAeMA&s", status:"Plan to Watch" },
    { title:"Breaking Bad", type:"Web Series", genre:"Thriller", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6sTIrva3qf1vbKZsml6E0z7yDtKW7CsyAA&s", status:"Completed" },
    { title:"Money Heist", type:"Web Series", genre:"Thriller", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDw2ai9eQvTrXDPApiyG5heEWuGtF9RkmdQA&s", status:"On Hold" },
    { title:"The Witcher", type:"Web Series", genre:"Fantasy", img:"https://sevenswords.uk/wp-content/uploads/2025/03/the-witcher-tv-scaled.jpg", status:"Dropped" },
    { title:"Wednesday", type:"Web Series", genre:"Comedy", img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FWednesday-Novelization-Tehlor-Kay-Mejia%2Fdp%2F0593896653&psig=AOvVaw21zQ1-wZ8PrQzDTdV-4lNm&ust=1755364537302000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOjfotCojY8DFQAAAAAdAAAAABAE", status:"Plan to Watch" },
    { title:"Game of Thrones", type:"Web Series", genre:"Fantasy", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_o0hvXIF6ZryDZgm1Ln6S2mlw9QVv-rOuDQ&s", status:"Completed" },
    { title:"The Crown", type:"Web Series", genre:"Drama", img:"https://i.imgur.com/xw4KNMl.jpg", status:"Completed" },
    { title:"Friends", type:"Web Series", genre:"Comedy", img:"https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/52dae4c7-2ab1-4bb9-ab1c-8100fd54e2f9/b29b3d80-ab56-11ef-9fed-0affd17b6387?host=wbd-images.prod-vod.h264.io&partner=beamcom", status:"Completed" },
    { title:"Peaky Blinders", type:"Web Series", genre:"Drama", img:"https://www.google.com/imgres?q=peaky%20blinders%20images&imgurl=https%3A%2F%2Fwallpapers.com%2Fimages%2Ffeatured%2Fpeaky-blinders-mf0te5aaoy07nn99.jpg&imgrefurl=https%3A%2F%2Fwallpapers.com%2Fpeaky-blinders&docid=OxNG_qGAWE6FIM&tbnid=kp7ptVopsIyQjM&vet=12ahUKEwj77oiSoY2PAxVJWHADHZatPEUQM3oECBUQAA..i&w=1920&h=1080&hcb=2&ved=2ahUKEwj77oiSoY2PAxVJWHADHZatPEUQM3oECBUQAA", status:"Plan to Watch" },
    { title:"The Mandalorian", type:"Web Series", genre:"Sci-Fi", img:"https://images.justwatch.com/poster/242758667/s166/season-1", status:"Plan to Watch" },

    { title:"Interstellar", type:"Movie", genre:"Sci-Fi", img:"https://i.imgur.com/gBL5oMf.jpg", status:"Completed" },
    { title:"Inception", type:"Movie", genre:"Sci-Fi", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8TRA73WHOTZR3uEW20a94_98EnGWruY5FvQ&s", status:"Completed" },
    { title:"Avengers: Endgame", type:"Movie", genre:"Action", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fwT7lbEey4JRQsmaPOisVT1ml0VI_QePlg&s", status:"Completed" },
    { title:"Titanic", type:"Movie", genre:"Romance", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXrQKSPWTn8cd_wqN0iJUEsrJcH2oO0EAEA&s", status:"Completed" },
    { title:"The Dark Knight", type:"Movie", genre:"Action", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0ZIGrRrt6Iu7Jy_OcyzBdb-nTS2ruUCZtw&s", status:"Completed" },
    { title:"John Wick", type:"Movie", genre:"Action", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUaezhVIRjBKE45Oqov8DWw6hhkPkLm0Jibw&s", status:"Completed" },
    { title:"Parasite", type:"Movie", genre:"Thriller", img:"https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2024/03/29150816/7IiTTgloJzvGI1TAYymCfbfl3vT-scaled.jpg", status:"Completed" },
    { title:"La La Land", type:"Movie", genre:"Romance", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO_L4crg1DWh25Xb4Sl861l5nSl9kbXPEN_g&s", status:"Completed" },
    { title:"Black Panther", type:"Movie", genre:"Action", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXzDHJpRy-Ophyc8y7Uk-3oHfctc1wpkV4DQ&s", status:"Completed" },
    { title:"The Social Network", type:"Movie", genre:"Drama", img:"https://gortoncenter.org/wp-content/uploads/2024/08/maxresdefault-5.jpg", status:"Plan to Watch" },

    { title:"Sherlock", type:"Web Series", genre:"Thriller", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6LCf8wx_3RjG7nCPAI8eSHfATBnWpH0Apvw&s", status:"Plan to Watch" },
    { title:"Dark", type:"Web Series", genre:"Sci-Fi", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrENR1hPPxMSfFD5OYu_DyoxrNCodPmijX4Q&s", status:"Completed" },
    { title:"The Boys", type:"Web Series", genre:"Action", img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FThe_Boys_%2528comics%2529&psig=AOvVaw2hXx_uJ3BjqlmWpvQy56xJ&ust=1755363502264000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCOiHpPOkjY8DFQAAAAAdAAAAABAK", status:"Plan to Watch" },
    { title:"Ozark", type:"Web Series", genre:"Drama", img:"https://www.shutterstock.com/shutterstock/photos/2502702441/display_1500/illustration-for-kids-entertainment-and-animation-2502702441.jpg", status:"On Hold" },
    { title:"Mindhunter", type:"Web Series", genre:"Thriller", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27zJJrg5xzFM8n_d9Gt5ujKRYDsplEmjv1A&s", status:"Dropped" },
    { title:"The Irishman", type:"Movie", genre:"Drama", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HeO8NgTz-RsZ8qBzPvEW7azltUzE7TqiHA&s", status:"Plan to Watch" },
    { title:"Blade Runner 2049", type:"Movie", genre:"Sci-Fi", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6sq6-74yDis0UYcOD0lVDc4ZKhVtoKPr0XQ&s", status:"Plan to Watch" },
    { title:"Mad Max: Fury Road", type:"Movie", genre:"Action", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPIIiUly3haHkVbpDQI7X8D5Y7W43RxIYrA&s", status:"Completed" },
    { title:"Her", type:"Movie", genre:"Romance", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMNq7Ux7lx-h0DkLjcinOgaEoID4Bt7gmFgQ&s", status:"Plan to Watch" },
    { title:"Get Out", type:"Movie", genre:"Horror", img:"https://www.google.com/imgres?q=get%20out%20images&imgurl=https%3A%2F%2Fwww.uphe.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fscale__344w_%2Fpublic%2F2025%2F03%2FGetOut_Poster.jpg%3Fitok%3DTZRGpT-F&imgrefurl=https%3A%2F%2Fwww.uphe.com%2Fmovies%2Fget-out&docid=MlMibKnNYCHY0M&tbnid=bSwWNUU9eodFoM&vet=12ahUKEwjM_ruMoo2PAxVWSWwGHRknGkMQM3oECBwQAA..i&w=344&h=486&hcb=2&ved=2ahUKEwjM_ruMoo2PAxVWSWwGHRknGkMQM3oECBwQAA", status:"Plan to Watch" }
  ];

  // Local storage keys
  const STORAGE_KEY = 'watchly_items_v1';
  const STATUS_KEY  = 'watchly_statuses_v1';

  // DOM refs
  const grid = document.getElementById('grid');
  const search = document.getElementById('search');
  const typeFilter = document.getElementById('typeFilter');
  const genreFilter = document.getElementById('genreFilter');
  const statusFilter = document.getElementById('statusFilter');

  const modal = document.getElementById('statusModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalStatus = document.getElementById('modalStatus');
  const closeModalBtn = document.getElementById('closeModal');
  const saveStatusBtn = document.getElementById('saveStatus');
  const cancelStatusBtn = document.getElementById('cancelStatus');

  const countShown = document.getElementById('countShown');
  const statCompleted = document.getElementById('statCompleted');
  const statPlan = document.getElementById('statPlan');
  const statDropped = document.getElementById('statDropped');

  // Load or initialize data
  let items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || initialData;
  // Statuses map: title -> status
  let savedStatuses = JSON.parse(localStorage.getItem(STATUS_KEY)) || {};
  items = items.map(it => ({ ...it, status: savedStatuses[it.title] || it.status || 'Plan to Watch' }));

  let activeIndex = null; // index of item being edited in modal

  // Render helpers
  function render(){
    const q = (search.value || '').trim().toLowerCase();
    const type = typeFilter.value;
    const genre = genreFilter.value;
    const status = statusFilter.value;

    // Filtering
    const filtered = items.filter(it=>{
      const matchesQ = it.title.toLowerCase().includes(q) || it.genre.toLowerCase().includes(q);
      const matchesType = type === 'All' || it.type === type;
      const matchesGenre = genre === 'All' || it.genre === genre;
      const matchesStatus = status === 'All' || it.status === status;
      return matchesQ && matchesType && matchesGenre && matchesStatus;
    });

    // Clear & animate
    grid.innerHTML = '';
    filtered.forEach((it, idx) => {
      const el = document.createElement('article');
      el.className = 'card fade-in';
      el.innerHTML = `
        <div class="poster" style="background-image:url('${it.img}');"></div>
        <div class="overlay">
          <div>
            <div style="font-weight:700;font-size:16px">${it.title}</div>
            <div class="muted" style="font-size:13px">${it.genre} • ${it.type}</div>
          </div>
          <div style="display:flex;align-items:center;gap:8px;margin-top:8px">
            <button class="btn ghost status-btn">Set Status</button>
            <div style="color:var(--muted);font-size:13px">Status: <strong style="color:#fff">${it.status}</strong></div>
          </div>
        </div>
        <div class="card-info">
          <div class="title">${it.title}</div>
          <div class="meta">${it.genre} • ${it.type}</div>
        </div>
      `;
      // click on Set Status opens modal
      el.querySelector('.status-btn').addEventListener('click', (e)=>{
        e.stopPropagation();
        openModalForItem(items.indexOf(it));
      });
      // also clicking card opens modal
      el.addEventListener('click', ()=> openModalForItem(items.indexOf(it)));
      grid.appendChild(el);
    });

    // stats
    countShown.textContent = filtered.length;
    statCompleted.textContent = items.filter(i=>i.status==='Completed').length;
    statPlan.textContent = items.filter(i=>i.status==='Plan to Watch').length;
    statDropped.textContent = items.filter(i=>i.status==='Dropped').length;
  }

  function openModalForItem(index){
    activeIndex = index;
    const it = items[index];
    modalTitle.textContent = it.title;
    modalStatus.value = it.status;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden','false');
  }

  function closeModal(){
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden','true');
    activeIndex = null;
  }

  // Save status from modal
  saveStatusBtn.addEventListener('click', ()=>{
    if(activeIndex === null) return closeModal();
    const newStatus = modalStatus.value;
    items[activeIndex].status = newStatus;
    savedStatuses[items[activeIndex].title] = newStatus;
    localStorage.setItem(STATUS_KEY, JSON.stringify(savedStatuses));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    render();
    closeModal();
  });

  // cancel / close
  cancelStatusBtn.addEventListener('click', closeModal);
  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e)=> { if(e.target === modal) closeModal(); });

  // filters
  [search, typeFilter, genreFilter, statusFilter].forEach(el=>{
    el.addEventListener('input', debounce(render, 160));
    el.addEventListener('change', render);
  });

  // debounce helper to make search smooth
  function debounce(fn, wait){ let t; return (...a)=>{ clearTimeout(t); t = setTimeout(()=>fn(...a), wait); }; }

  // initial render
  render();

  // expose small debug in console
  window.Watchly = { items, render };
});
