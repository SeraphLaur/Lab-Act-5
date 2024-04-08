function Footer({ items }) {
  let itemCount = items.length;
  let completedItems = items.filter((item) => item.isChecked).length;
  let completionPercentage = Math.round((completedItems / itemCount) * 100);

  return (
    <div>
      <p>
        You have {itemCount} item(s) in your list, and you already completed{" "}
        {completedItems}, {completionPercentage}%
      </p>
    </div>
  );
}

export default Footer;
