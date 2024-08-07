import styles from "../styles/Home.module.css";
import React, { useState, forwardRef, useEffect } from "react";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import {
  product,
  addToCart,
  addToFavorites,
  removeFromFavorites,
} from "../reducer/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

const Shop = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [name, setName] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isliked, setIsLiked] = useState({});
  const Data = [
    {
      id: 1,
      name: "BRAIDS",
      img: "./barids.jpg",
      imgp: "./braidspro.png",
      fonction: "macro oscillator",
      prix: "180",
      features:
        "Band-limited dual pulse train, with detuning.Dual square or sawtooth oscillator with hard sync.Triple saw, square, triangle or sine. Stack of three ring-modulated sine waves.Swarm of seven sawtooth waves.Comb-filtered sawtooth wave. Circuit-bent sawtooth generator with sample rate reduction and bit toggling.Direct synthesis of filtered waveforms, casio CZ style. Low-fi or hi-fi vowel/formant synthesis.Harmonic oscillator. FM with various feedback paths..",
      spec: "All inputs: 100k impedance, DC to 4kHz 12-bit CV capture. 96kHz, 16-bit audio processing (some algorithms are 2x or 4x oversampled).",
    },
    {
      id: 2,
      name: "CLOUDS",
      img: "./clouds.jpg",
      imgp: "./cloudspro.png",
      fonction: "texture synthesizer",
      prix: "280",
      features:
        "Stereo I/O. Even with a mono recording buffer, a wide stereo output can still be simulated by randomly panning grains or through the stereo reverberator. Stereo pre-amp with a gain range covering modular and line levels. Recording buffer size: 1s (32kHz, stereo) to 8s (16kHz, µ-law, mono). The FREEZE button and the corresponding gate input freezes the content of the recording buffer, allowing you to dive into its sonic details.",
      spec: "Input impedances: 100 Audio input gain range: line level to modular level. CV range: +/- 5V. CVs outside of this range are simply clipped.Internal processing: 32kHz, 32-bit floating point. RAM Recording buffer uses 16-bit (high quality or 8-bit µ-law (low quality) resolution.",
    },
    {
      id: 3,
      name: "MARBLES",
      img: "./marbles.jpg",
      imgp: "./Marblesp.jpg",
      fonction: "random sampler",
      prix: "290",
      features:
        "Three gate outputs: t2 is the main output carrying the jittery clock, t1 and t3 are the complementary random rhythm output.3 outputs, either clocked by the 3 outputs of the random gate generator, or by a common external clock.Distribution control: SPREAD control, scanning between constant, bell-shaped, uniform or discrete distributions; and BIAS control biasing the generated voltage towards the bottom or top of the voltage range.Adjustable range: 0 to +2V (for melodies), 0 to +5V, -5V to +5V.",
      spec: "Analog random source. All inputs: 100k impedance, DC to 3.2kHz.Maximum input clock rate: 1kHz for the t Section, 8kHz for the X section. 32kHz refresh rate.14-bit DAC with accurate software calibration - error below 1mV.12-bit CV capture. Output levels: -5V to +5V for CVs (largest setting), 0V to +8V for gates.Input CV range: -5V to +5V.",
    },
    {
      id: 4,
      name: "FRAMES",
      img: "./frames.jpg",
      imgp: "./framespro.png",
      fonction: "keyframer/mixer",
      prix: "160",
      features:
        "4 DC-coupled signal inputs.1 global input, sent to all unconnected inputs, and normalized to a precision voltage reference (+5V or +10V).4 DC-coupled channel outputs.1 global mix output, collecting signals from all unpatched outputs, with a -6dB gain.",
      spec: "CV input impedance: 100k.Audio input impedance: 100k (25k for the global input in some configurations due to normalling). Fastest modulation rate: 15kHz.",
    },
    {
      id: 5,
      name: "PEAKS",
      img: "./peaks.jpg",
      imgp: "./peakspro.png",
      fonction: "multifunction gap-filler",
      prix: "160",
      features:
        "0.03 Hz to 160 Hz.5 basic waveforms: square, triangle, sine, stepped, random.Waveform variations and morphing for each of these: PWM, slope, folding/harmonics, step size, interpolation.Phase at reset control.Tap LFO can lock onto irregular rhythms.Channel 1: 808 kick model with extra parameters (tune, punch).Channel 2: 808 snare model with extra parameters (tune, decay). Channel 2: A specific combination of settings transform the snare into a modelled 808 hi-hat.",
      spec: "Inputs: 100k impedance, threshold at 0.6V.16-bit CV/audio generation with 48kHz sample rate.Output level: 0 to +8V for envelopes, 10Vpp for LFOs and drum signals..",
    },
    {
      id: 6,
      name: "RINGS",
      img: "./rings.jpg",
      imgp: "./ringspro.png",
      fonction: "resonator",
      prix: "170",
      features:
        "Modal resonator, as used in Elements.Sympathetic strings, modelled by a network of comb filters.String with non-linearity/dispersion (comb filter with multimode filter and non-linearities in the loop).All resonator models can be used polyphonically, with 1, 2 or 4 polyphony voices Audio input accepting modular level signals, up to 16 Vpp.Two audio outputs, either splitting odd/even partials in monophonic mode, or even/odd notes in polyphonic mode.",
      spec: "Trigger input: 100k impedance, 0.6V threshold.CV inputs: 100k impedance, +/- 8V, 12-bit 2kHz.Audio I/O: 16-bit, 48kHz.Internal processing: 32-bit floating point.",
    },
    {
      id: 7,
      name: "TIDES",
      img: "./tides.jpg",
      imgp: "./tidespro.png",
      fonction: "tidal modulator",
      prix: "220",
      features:
        "3 operating mode: single shot (attack/decay), sustained (attack/sustain/release), looping (VC-LFO/VCDO).3 frequency ranges: low (20 minutes to 5 Hz), medium (0.05 Hz to 300 Hz), high (8 Hz to 10kHz).Freeze gate input to stop the oscillator and hold its output.Shape control with CV input – covering various combinations of linear, exponential, or sinusoidal segments.Slope/asymmetry (A/D time ratio) control with CV input. Smoothness control with CV input. From 0V to -5V, smoothes the waveform using a 2-pole digital filter, from 0V to +5V.",
      spec: "All inputs: 100k impedance.CV inputs: 12-bit, 1kHz for shape/slope/smoothness, 12-bit to 6kHz for FM, 12-bit 48kHz for amplitude.CV Outputs: 16-bit, 48kHz.Output levels: +/- 5V for the BI output, 0V to +8V for the other outputs.",
    },
    {
      id: 8,
      name: "YARNS",
      img: "./yarns.jpg",
      imgp: "./tidespro.png",
      fonction: "4-channel MIDI interface",
      prix: "175",
      features:
        "Monophonic with note, velocity, modulation wheel, auxiliary CC/aftertouch CV.2-voice polyphonic or 2-part multitimbral with two note CV and auxiliary CC/aftertouch CV.4-voice polyphonic or 4-part multitimbral with four note CV.4-part trigger conversion with MIDI note selection for each part.Clock/reset output in monophonic, duophonic, or trigger conversion modes.Polychaining mode handling half of the notes internally and forwarding the other half to the MIDI out..",
      spec: "8kHz CV refresh rate, 48kHz refresh rate in audio mode.High-end 16-bit DAC and voltage references.12-point calibration table, adjusted in factory.8 memory slots for storing/recalling all settings and sequences.Cortex-M3 ARM processor guaranteeing blazingly fast response to MIDI messages (125µs latency)..",
    },
    {
      id: 9,
      name: "VEILS",
      img: "./veils.jpg",
      imgp: "./veilspro.png",
      fonction: "quad VCA",
      prix: "140",
      features:
        "VCAs are absolutely essential in a modular system, for example for:Shaping the amplitude or timbre of a tone with an envelope.Animating a mixture of several oscillators.Controlling the amount of filter modulation with a random source or a touch controller.Applying an envelope on the linear FM signal hitting an oscillator.",
      spec: "All inputs DC-coupled.All inputs handle audio-rate signals.Input impedance: 100k for all inputs.Gain scale: a +5V CV translates to a gain of 1 (0dB), both in linear and in exponential mode.Large gains above +20dB (sufficient for amplifying line-level signals) achievable in exponential mode.",
    },
    {
      id: 10,
      name: "PLAITS",
      img: "./plaits.jpg",
      imgp: "./plaitspro.png",
      fonction: "macro-oscillator",
      prix: "180",
      features:
        "Two detuned virtual analog oscillators with continuously variable waveforms.Variable slope triangle oscillator processed by a waveshaper and wavefolder.2-operator FM with continuously variable feedback path.Two independently controllable formants modulated by a variable shape window (VOSIM, Pulsar, Grainlet, Casio CZ-style resonant filter...).24-harmonic additive oscillator. Wavetable oscillator with four banks of 8x8 waves, with or without interpolation.Chord generator, with divide down string/organ emulation or wavetables.",
      spec: "All inputs: 100k impedance, DC to 2kHz.FM, MORPH, TIMBRE input range: +/- 8VHARMO and MODEL input range: +/- 5V.LEVEL and TRIG input range: 0 to +8V.V/OCT input range: -3 to +7V.16-bit CV capture.Audio output: 48kHz, 16-bit, DC-coupled.Internal processing: 32-bit floating point..",
    },
    {
      id: 11,
      name: "STAGES",
      img: "./stages.jpg",
      imgp: "./veilspro.png",
      fonction: "segment generator",
      prix: "260",
      features:
        "A segment, or a group of segments, can loop on itself: if the last segment of the envelope is included in the loop, the loop lasts forever. Otherwise, the loop remains active while the gate is high, then continues past the last segment of the loop. These two behaviors allow the creation of self-looping envelopes (LFOs), or the sustain stage of a good old ADSR envelope!",
      spec: "All inputs: 100k impedance, DC to 2kHz.FM, MORPH, TIMBRE input range: +/- 8VHARMO and MODEL input range: +/- 5V.LEVEL and TRIG input range: 0 to +8V.V/OCT input range: -3 to +7V.16-bit CV capture.Audio output: 48kHz, 16-bit, DC-coupled.Internal processing: 32-bit floating point..",
    },
    {
      id: 12,
      name: "FRAMES",
      img: "./frames.jpg",
      imgp: "./framespro.png",
      fonction: "dual multimode filter",
      prix: "360",
      features:
        "Stereo I/O. Even with a mono recording buffer, a wide stereo output can still be simulated by randomly panning grains or through the stereo reverberator. Stereo pre-amp with a gain range covering modular and line levels. Recording buffer size: 1s (32kHz, stereo) to 8s (16kHz, µ-law, mono). The FREEZE button and the corresponding gate input freezes the content of the recording buffer, allowing you to dive into its sonic details.",
      spec: "Input impedances: 100 Audio input gain range: line level to modular level. CV range: +/- 5V. CVs outside of this range are simply clipped.Internal processing: 32kHz, 32-bit floating point. RAM Recording buffer uses 16-bit (high quality or 8-bit µ-law (low quality) resolution.",
    },
  ];
  const handleRouter = (item) => {
    dispatch(product(item));
    router.push("/product");
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setIsModalVisible(true);
    setName(item.name);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 4000);
  };
  useEffect(() => {
    const storedLikedItems = localStorage.getItem("likedItems");
    if (storedLikedItems) {
      setIsLiked(JSON.parse(storedLikedItems));
    }
  }, []);
  const handleLike = (item) => {
    const isItemLiked = isliked[item.id];

    // Créer une copie de l'état actuel
    const updatedIsLiked = { ...isliked };

    if (isItemLiked) {
      // Si l'élément est déjà liké, le supprimer de isLiked
      delete updatedIsLiked[item.id];
    } else {
      // Sinon, ajouter l'élément à isLiked
      updatedIsLiked[item.id] = true;
    }

    // Mettre à jour l'état
    setIsLiked(updatedIsLiked);

    // Dispatch l'action en fonction de l'état actuel
    if (isItemLiked) {
      // Si l'élément est déjà liké, retirer des favoris
      dispatch(removeFromFavorites(item)); // Assurez-vous que l'action removeFromFavorites existe
    } else {
      // Sinon, ajouter aux favoris
      dispatch(addToFavorites(item));
    }

    // Mettre à jour le localStorage
    localStorage.setItem("likedItems", JSON.stringify(updatedIsLiked));
  };

  return (
    <div class="flex justify-center items-center flex-col mt-28 mb-16 ">
      <h4 ref={ref} class="text-4xl mb-10 flex items-end ">
        {" "}
        <img src="./down-chevron.png" class="w-4 h-4 mr-5"></img>SHOP{" "}
        <img src="./down-chevron.png" class="w-4 h-4 ml-4"></img>
      </h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {Data.map((item) => {
          const isItemLiked = isliked[item.id]; // vérifie si l'élément est liké
          return (
            <div
              key={item.id}
              className="rounded-md bg-zinc-300 w-64 h-auto px-4 pt-4 shadow-inner  relative m-10 "
            >
              <div
                className="cursor-pointer group"
                onClick={() => handleRouter(item)}
              >
                <img
                  className="w-auto h-auto mx-auto shadow-2xl max-h-64 group-hover:blur-md transition duration-500 ease-in-out"
                  src={item.img}
                  alt={item.fonction}
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center text-white text-[20px] z-0 pl-2.5 pr-2.5 rounded-md bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  See Product
                </div>
                <div className="flex flex-col items-center py-5">
                  <div className="text-lg group-hover:blur-md transition duration-500 ease-in-out">
                    {item.fonction}
                  </div>
                  <div className="text-lg mt-2 group-hover:blur-md transition duration-500 ease-in-out">
                    {item.prix}$
                  </div>
                </div>
              </div>
              <div className="flex py-5 mb-0 mt-0 z-10">
                <div
                  onClick={() => handleAddToCart(item)}
                  className="text-base cursor-pointer border-solid border-2 border-black rounded-md py-2 flex items-center z-10 bg-zinc-100 justify-center  w-40 hover:bg-customBlue hover:text-white hover:transition hover:border-white "
                >
                  ADD TO CART
                  <FontAwesomeIcon className="w-5 ml-2" icon={faCartShopping} />
                </div>
                <FontAwesomeIcon
                  className="w-8 h-6 ml-5 mt-2 cursor-pointer z-10  hover:text-customBlue "
                  style={{
                    color: isItemLiked ? "rgb(19,129,136)" : "white",
                  }} // met à jour le style en fonction de isItemLiked
                  icon={isItemLiked ? faHeartSolid : faHeartRegular}
                  onClick={() => handleLike(item)} // passe l'item à handleLike
                />
              </div>
            </div>
          );
        })}
        {isModalVisible && (
          <div className="fixed bottom-20 right-20 z-20">
            <div className="bg-customBlue rounded-md text-white p-5  shadow-lg">
              <p>
                {name} is in your cart!{" "}
                <FontAwesomeIcon className="w-5 ml-2" icon={faCartShopping} />
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
});

export default Shop;
