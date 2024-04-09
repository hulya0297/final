import { Link } from "react-router-dom";
import leftimg from "../../assets/image/aboutImg/img1.png";
import rightimg from "../../assets/image/aboutImg/img2.png";
import { IoSearchSharp } from "react-icons/io5";
import blogImg1 from "../../assets/image/blogImg/img1.jpg";
import blogImg2 from "../../assets/image/blogImg/img2.jpg";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import avatar1 from "../../assets/image/blogImg/avatar1.png";
import avatar2 from "../../assets/image/blogImg/avatar2.png";
import avatar3 from "../../assets/image/blogImg/avatar3.png";
import { IoMdArrowRoundForward } from "react-icons/io";
import "./blog.scss";
import Subscribe from "../../shared/subscribe/Subscribe";

const Blog = () => {
  return (
    <main className="blog">
      {/* blog */}
      <section className="blog_banner">
        <aside className="blog_banner_leftside">
          <img
            className="blog_banner_leftside_img"
            src={leftimg}
            alt="leftimg"
          />
        </aside>
        <div className="blog_banner_content">
          <h2 className="blog_banner_content_title">Blog</h2>
          <span className="blog_banner_content_text">
            <Link to="/" className="blog_banner_content_text_link">
              Home
            </Link>
            /
          </span>
          <span className="blog_banner_content_text">
            <Link to="/blog" className="active">
              Blog
            </Link>
          </span>
        </div>
        <aside className="blog_banner_rightside">
          <img
            className="blog_banner_rightside_img"
            src={rightimg}
            alt="rightimg"
          />
        </aside>
      </section>
      {/* blog */}
      {/* blog info */}
      <section className="blog_info">
        <article className="blog_info_leftside">
          <h5 className="blog_info_leftside_title">SEARCH</h5>
          <form className="blog_info_leftside_searchform">
            <input
              className="blog_info_leftside_searchform_input"
              type="search"
              placeholder="Search product..."
            />
            <div className="blog_info_leftside_searchform_icons">
              <IoSearchSharp />
            </div>
          </form>
          <div className="blog_info_leftside_category">
            <h3 className="blog_info_leftside_category_title">Recent Posts</h3>
            <ul className="blog_info_leftside_category_list">
              <li className="blog_info_leftside_category_list_item">
                Blog image post{" "}
              </li>
              <div className="blog_info_leftside_underline"></div>
              <li className="blog_info_leftside_category_list_item">
                Post with Gallery{" "}
              </li>
              <div className="blog_info_leftside_underline"></div>
              <li className="blog_info_leftside_category_list_item">
                Post with Audio
              </li>
              <div className="blog_info_leftside_underline"></div>
              <li className="blog_info_leftside_category_list_item">
                Post with Video
              </li>
              <div className="blog_info_leftside_underline"></div>
              <li className="blog_info_leftside_category_list_item">
                Maecenas ultricies
              </li>
              <div className="blog_info_leftside_underline"></div>
            </ul>
          </div>
          <div className="blog_info_leftside_category">
            <h3 className="blog_info_leftside_category_title">
              Recent Comments
            </h3>
            <ul className="blog_info_leftside_category_list">
              <li className="blog_info_leftside_category_list_item">
                {" "}
                Admin on Vivamus blandit
              </li>
              <div className="blog_info_leftside_underline"></div>
              <li className="blog_info_leftside_category_list_item">
                {" "}
                Admin on Vivamus blandit
              </li>
              <div className="blog_info_leftside_underline"></div>
              <li className="blog_info_leftside_category_list_item">
                {" "}
                Admin on Vivamus blandit
              </li>
              <div className="blog_info_leftside_underline"></div>
              <li className="blog_info_leftside_category_list_item">
                {" "}
                Admin on Vivamus blandit
              </li>
              <div className="blog_info_leftside_underline"></div>
              <li className="blog_info_leftside_category_list_item">
                {" "}
                Admin on Vivamus blandit
              </li>
              <div className="blog_info_leftside_underline"></div>
            </ul>
          </div>
          <div className="blog_info_leftside_category">
            <h3 className="blog_info_leftside_category_title">Archives</h3>
            <ul className="blog_info_leftside_category_list">
              <li className="blog_info_leftside_category_list_item ">
                March 2018
              </li>
              <br />
              <li className="blog_info_leftside_category_list_item">
                December 2018
              </li>
              <br />
              <li className="blog_info_leftside_category_list_item">
                November 2018
              </li>
              <br />
              <li className="blog_info_leftside_category_list_item">
                September 2018
              </li>
              <br />
              <li className="blog_info_leftside_category_list_item">
                August 2018
              </li>
            </ul>
          </div>
          <div className="blog_info_leftside_category">
            <h3 className="blog_info_leftside_category_title">CATEGORIES</h3>
            <ul className="blog_info_leftside_category_list">
              <li className="blog_info_leftside_category_list_item ">
                Creative
              </li>
              <br />
              <li className="blog_info_leftside_category_list_item">Fashion</li>
              <br />
              <li className="blog_info_leftside_category_list_item">Image</li>
              <br />
              <li className="blog_info_leftside_category_list_item">
                Photography
              </li>
              <br />
              <li className="blog_info_leftside_category_list_item">Travel</li>
              <br />
              <li className="blog_info_leftside_category_list_item">Videos</li>
              <br />
              <li className="blog_info_leftside_category_list_item">
                WordPress
              </li>
            </ul>
          </div>
          <div className="blog_info_leftside_category">
            <h3 className="blog_info_leftside_category_title">META</h3>
            <ul className="blog_info_leftside_category_list">
              <li className="blog_info_leftside_category_list_item ">Log in</li>
              <br />
              <li className="blog_info_leftside_category_list_item">
                Entries RSS
              </li>
              <br />
              <li className="blog_info_leftside_category_list_item">
                Comments RSS
              </li>
              <br />
              <li className="blog_info_leftside_category_list_item">
                WordPress.org
              </li>
            </ul>
          </div>
        </article>
        <article className="blog_info_rightside">
          <img src={blogImg1} alt="img1" />
          <div className="blog_info_rightside_content">
            <div className="blog_info_rightside_content_leftalign">
              <p>20</p>
              <p className="blog_info_rightside_content_leftalign_date">Sep</p>
            </div>
            <div className="blog_info_rightside_content_rightalign">
              <h4 className="blog_info_rightside_content_rightalign_title">
                Aptent taciti soci litora cianpen
              </h4>
              <p className="blog_info_rightside_content_rightalign_writer">
                Post by: Jane doe
              </p>
            </div>
          </div>
          <p className="blog_info_rightside_text">
            The standard Lorem Ipsum passage, used since the 1500s <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <p className="blog_info_rightside_text">
            Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero
            in 45 BC <br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
          <br />
          <img src={blogImg2} alt="img2" />
          <br />
          <br />
          <p className="blog_info_rightside_text">
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain. These cases are perfectly simple and easy to distinguish. In a
            free hour, when our power of choice is untrammelled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains.
          </p>
        </article>
      </section>
      {/* blog info */}
      <div className="main_underline"></div>
      {/* blog network section */}
      <section className="blog_network">
        <div className="blog_network_share">
          <h5 className="blog_network_share_title">SHARE THIS POST:</h5>
          <ul className="blog_network_share_list">
            <li className="blog_network_share_list_item">
              <FaFacebookF className="blog_network_share_list_item_icon" />
            </li>
            <li className="blog_network_share_list_item">
              <FaGooglePlusG className="blog_network_share_list_item_googleicon " />
            </li>
            <li className="blog_network_share_list_item">
              <FaTwitter className="blog_network_share_list_item_icon" />
            </li>
            <li className="blog_network_share_list_item">
              <FaPinterestP className="blog_network_share_list_item_icon" />
            </li>
          </ul>
        </div>
      </section>
      {/* blog network section */}
      {/* blog Comment section */}
      <section className="blog_commentSec">
        <h4 className="blog_commentSec_title">3 COMMENTS</h4>
        <div className="blog_commentSec_container">
          <div className="blog_commentSec_container_item">
            <img src={avatar1} alt="" />
            <div className="blog_commentSec_container_item_content">
              <p className="blog_commentSec_container_item_content_user">
                Admin
                <span className="blog_commentSec_container_item_content_time">
                  Post authorOctober 6, 2014 at 1:38 am
                </span>
                <span className="blog_commentSec_container_item_content_reply">
                  Reply
                </span>
              </p>
              <p className="blog_commentSec_container_item_content_post">
                just a nice post
              </p>
            </div>
          </div>
        </div>
        <div className="blog_commentSec_container">
          <div className="blog_commentSec_container_avgitem">
            <img src={avatar2} alt="" />
            <div className="blog_commentSec_container_avgitem_avgcontent">
              <p className="blog_commentSec_container_item_content_user">
                Admin
                <span className="blog_commentSec_container_item_content_time">
                  Post authorOctober 6, 2014 at 1:38 am
                </span>
                <span className="blog_commentSec_container_item_content_reply">
                  Reply
                </span>
              </p>
              <p className="blog_commentSec_container_item_content_post">
                Quisque semper nunc vitae erat pellentesque, ac placerat arcu
                consectetur
              </p>
            </div>
          </div>
        </div>
        <div className="blog_commentSec_container">
          <div className="blog_commentSec_container_item">
            <img src={avatar3} alt="" />
            <div className="blog_commentSec_container_item_content">
              <p className="blog_commentSec_container_item_content_user">
                Admin
                <span className="blog_commentSec_container_item_content_time">
                  Post authorOctober 6, 2014 at 1:38 am
                </span>
                <span className="blog_commentSec_container_item_content_reply">
                  Reply
                </span>
              </p>
              <p className="blog_commentSec_container_item_content_post">
                Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel
                mauris. Aenean at justo dolor. Fusce ac sapien bibendum,
                scelerisque libero nec Quisque orci nibh, porta vitae sagittis
                sit amet, vehicula vel mauris. Aenean at justo dolor. Fusce ac
                sapien bibendum, scelerisque libero nec
              </p>
            </div>
          </div>
        </div>
        <div className="main_underline"></div>
      </section>
      {/* blog Comment Section */}
      <section className="leaveComment">
        <h4 className="leaveComment_title">LEAVE A COMMENT</h4>
        <div className="leaveComment_container">
          <div className="leaveComment_container_input">
            <textarea
              className="leaveComment_container_input_message"
              cols="150"
              rows="10"
              placeholder="Comment"
            ></textarea>
          </div>
          <form className="leaveComment_container_form">
            <input
              className="leaveComment_container_input_item"
              type="text"
              placeholder="Name..."
            />
            <input
              className="leaveComment_container_input_item"
              type="email"
              placeholder="Email..."
            />
            <input
              className="leaveComment_container_input_item"
              type="text"
              placeholder="Website..."
            />
          </form>
        </div>
        <div className="leaveComment-contain">
          <button className="leaveComment-contain_btn">
            Post Now
            <IoMdArrowRoundForward />
          </button>
        </div>
      </section>
      <Subscribe />
    </main>
  );
};

export default Blog;
