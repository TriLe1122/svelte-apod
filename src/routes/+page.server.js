// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/**@type {import('./$types').PageServerLoad} */
export const load = async (event) => {

  const { url } = event
  return {
    pathname: url.pathname
  }
}