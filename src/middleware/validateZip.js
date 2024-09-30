function validateZip(req, res, next) {
  const zip = req.params.zip;
  if (isNaN(zip)) {
    next(`Zip (${zip}) is invalid!`);
  } else if (zip.length === 5) {
    next();
  } else {
    next(`Zip (${zip}) is invalid!`);
  }
}

module.exports = validateZip;
