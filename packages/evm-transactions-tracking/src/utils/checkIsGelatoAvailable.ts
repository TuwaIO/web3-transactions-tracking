/**
 * Check if Gelato services are available for the given chainId.
 *
 * @param {number} chainId - The chain identifier for which to check Gelato availability.
 * @return {boolean} - True if Gelato services are available for the given chainId, false otherwise.
 */
export async function checkIsGelatoAvailable(chainId: number): Promise<boolean> {
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
