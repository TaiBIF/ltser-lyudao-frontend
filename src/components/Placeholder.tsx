import Spinner from 'components/Spinner';

interface PlaceholderProps {
  layout?: string;
  text?: string;
}

const Placeholder = (props: PlaceholderProps) => {
  const { layout, text } = props;
  return (
    <div className={`c-placeholder c-placeholder--${layout}`}>
      <div className="c-placeholder__icon">
        {text && (
          <>
            <div className="c-placeholder__img">
              <Spinner layout="placeholder" />
            </div>
            <span className="c-placeholder__text">{text}...</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Placeholder;
