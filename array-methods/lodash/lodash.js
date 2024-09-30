console.log(`Lodash Lesson`);
const data = [
  {
    platformId: 1,
    payout: 15,
    numOfPeople: 4,
  },
  {
    platformId: 1,
    payout: 12,
    numOfPeople: 3,
  },
  {
    platformId: 2,
    payout: 6,
    numOfPeople: 5,
  },
  {
    platformId: 2,
    payout: 10,
    numOfPeople: 1,
  },
];

const ans = _(data)
  .groupBy("platformId")
  .map((platform, id) => ({
    platformId: id,
    payout: _.sumBy(platform, "payout"),
    numOfPeople: _.sumBy(platform, "numOfPeople"),
  }))
  .value();

console.log(ans);
