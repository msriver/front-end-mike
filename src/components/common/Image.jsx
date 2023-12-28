const defaultProps = {
  image: 'https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxNHx8c2VvdWx8ZW58MXx8fHwxNzAwNDg4NzI3fDA&ixlib=rb-4.0.3&q=80&w=1080',
  styles: {
    top: '0px',
    left: '0px',
    width: '720px',
    height: '900px',
    backgroundImage: 'url(./image.jpeg)',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
};

const Image = (props) => {
  const imageStyle = props.styles ? props.styles : defaultProps.styles;
  return (
    <div style={{
      ...imageStyle,
      backgroundImage: `url(${props.image ?? defaultProps.image})`,
    }} />
  );
};

export default Image;