// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/**@type {import('./$types').LayoutServerLoad} */
export const load = async (/** @type {{ url: any; }} */ event) => {

  const { url } = event
  return {
    pathname: url.pathname
  }
}