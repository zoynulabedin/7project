const newpost = document.querySelector('#newpost');
const opacity_bg = document.querySelector('.opacity-bg');
const body = document.querySelector('body');
const insta_wrapper_cl = document.querySelector('.insta-timeline-wrapper');
const editDelete = document.querySelector('.edit-delete');
const cancel = document.querySelector('.cancel');
const remove = document.querySelector('.remove');
newpost.onclick = (e) => {
    e.preventDefault();
    opacity_bg.style.display = 'block';
    const insta_post_form = document.querySelector('#insta_post_form');
    const msg = document.querySelector('.msg');
    insta_post_form.onsubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const insta_data = Object.fromEntries(formData.entries());
        const {photo, name,caption}  = insta_data;
        if(!photo || !name || !caption){
            msg.innerHTML = setAlert('Please fill all fields','danger');
            return false;
        }else{
            sendDatatoLocalStorage('insta_data', insta_data);
            msg.innerHTML = setAlert('Post Successfully','success');
            opacity_bg.style.display = 'none';
        }
    }
  

}

// get data from local storage

let allusers = getDatafromLocalStorage('insta_data');
const instaBtn = document.getElementById('instaBtn');
if(!allusers || allusers.length === 0){
    insta_wrapper_cl.innerHTML = `<div class="alert alert-danger" role="alert">No Data Found</div>`;
}

let list = '';
allusers.map((item,index) =>{
  let dataIndex = index + 1;
    list += `
    <div class="card insta-timeline mt-3">
                    <div class="timeline-box-wrapper">
                      <div
                        class="timeline-top d-flex justify-content-between align-items-center"
                      >
                        <div class="tr-user-img d-flex align-items-center">
                          <a href="#"
                            ><img
                              src="${item.photo}"
                              alt=""
                          /></a>
                          <div class="tr-name"><span>${item.name}</span>
                          <p>
                          ${item.caption}
                        </p>
                          </div>
                        </div>
                        <div class="delete-modal px-3">
                          <button id="instaBtn" data-index="${dataIndex}" class="btn insta-btn">...</button>
                        </div>
                      </div>
                     
                      <div class="timeline-thumbnail mt-3">
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskOqhAcwqcXiXx5YVeb7CQ5XP2dQiJ7LkFw&usqp=CAU"
                          alt=""
                        />
                      </div>
                      <div class="timeline-footer">
                        <div
                          class="footer-top d-flex justify-content-between align-items-center py-2 px-2"
                        >
                          <div class="footer-top-icon-left">
                            <a class="px-2" href="#"
                              ><svg
                                aria-label="Like"
                                class="_ab6-"
                                color="#8e8e8e"
                                fill="#8e8e8e"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <path
                                  d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
                                ></path></svg
                            ></a>
                            <a class="px-2" href="#"
                              ><svg
                                aria-label="Comment"
                                class="_ab6-"
                                color="#8e8e8e"
                                fill="#8e8e8e"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <path
                                  d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                ></path></svg
                            ></a>
                            <a href="#"
                              ><svg
                                aria-label="Share Post"
                                class="_ab6-"
                                color="#8e8e8e"
                                fill="#8e8e8e"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <line
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  x1="22"
                                  x2="9.218"
                                  y1="3"
                                  y2="10.083"
                                ></line>
                                <polygon
                                  fill="none"
                                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                                  stroke="currentColor"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                ></polygon></svg
                            ></a>
                          </div>
                          <div class="footer-save-icon">
                            <a href="#"
                              ><svg
                                aria-label="Save"
                                class="_ab6-"
                                color="#8e8e8e"
                                fill="#8e8e8e"
                                height="24"
                                role="img"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <polygon
                                  fill="none"
                                  points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                                  stroke="currentColor"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                ></polygon></svg
                            ></a>
                          </div>
                        </div>
                      </div>
                      <div class="post-time px-3 pb-3">22 hours ago</div>
                    </div>
                    <div
                      class="card-footer d-flex align-items-center justify-content-between bg-white"
                    >
                      <div class="imoji">
                        <button class="btn">
                          <svg
                            aria-label="Emoji"
                            class="_ab6-"
                            color="#262626"
                            fill="#262626"
                            height="24"
                            role="img"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path
                              d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div class="comment-field">
                        <input
                          class="w-100"
                          type="text"
                          placeholder="Add a comment..."
                        />
                      </div>
                      <div class="post-button">
                        <button class="btn">Post</button>
                      </div>
                    </div>
                  </div>
    `;
    insta_wrapper_cl.innerHTML = list;
});

insta_wrapper_cl.onclick = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('insta-btn')) {
    editDelete.style.display = "block";
    
  }
}
cancel.onclick = () => {
  editDelete.style.display = "none";
}



