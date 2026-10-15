import company from "../data/company.json";

const fallbackSuffix = "摩托车手机支架";

export function makePageTitle(page?: string) {
  return page ? `${page} | ${company.name}` : `${company.name} | ${fallbackSuffix}`;
}
