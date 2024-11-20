import PropTypes from "prop-types";

export const GifItem = ({ id, title, url }) => {
    return (
        <div className="card" key={id}>
            <img src={url} alt={title}></img>
            <p>{title}</p>
        </div>
    );
};

GifItem.propTypes = {
    // image: PropTypes.object,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};
