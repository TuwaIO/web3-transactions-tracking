export async function checkIsGelatoAvailable(chainId: number) {
  try {
    const response = await fetch(`https://relay.gelato.digital/relays/v2`);
    if (!response.ok) {
      return false;
    } else {
      const listOfRelays = (await response.json()) as { relays: string[] };
      return !!listOfRelays.relays.find((id) => +id === chainId);
    }
  } catch (e) {
    console.error('Check is gelato services available error:', e);
    return false;
  }
}
