import Rating from "@mui/material/Rating";

function StarRating(props: any) {
  return (
    <div className="pt-2">
      <Rating
        precision={0.5}
        readOnly={true}
        size={"large"}
        value={props.value}
      />
    </div>
  );
}

export default StarRating;
