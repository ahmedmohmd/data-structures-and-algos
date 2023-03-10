import CloudStream from "./cloud-stream";
import Stream from "./stream";

class CompressedCouldStream implements Stream {
  private _stream: Stream;

  constructor(stream: Stream) {
    this._stream = stream;
  }

  write(data: string): void {
    const compressedData = this.compress(data);
    this._stream.write(compressedData);
  }

  private compress(data: string): string {
    return data.substring(0, 5);
  }
}

export default CompressedCouldStream;
