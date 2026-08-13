import React from 'react';

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

/**
 * Fältservice icon – Detailed industrial mobile service truck with tools & emergency beacon
 */
export const FieldServiceIcon: React.FC<IconProps> = ({ size = 140, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer subtle glow circle */}
    <circle cx="70" cy="70" r="62" stroke={color} strokeWidth="1" opacity="0.1" strokeDasharray="4 4" />
    
    {/* Ground base & motion lines */}
    <line x1="12" y1="106" x2="128" y2="106" stroke={color} strokeWidth="2" opacity="0.2" strokeLinecap="round" />
    <line x1="4" y1="106" x2="8" y2="106" stroke={color} strokeWidth="2" opacity="0.1" strokeLinecap="round" />

    {/* Service Truck Main Body */}
    <path d="M18 52 C18 48, 21 45, 25 45 L78 45 L78 95 L22 95 C19.8 95, 18 93.2, 18 91 Z" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.05" strokeLinejoin="round" />
    {/* Cargo box panel lines */}
    <rect x="24" y="51" width="50" height="40" rx="2" stroke={color} strokeWidth="1.2" opacity="0.25" fill="none" />
    <line x1="49" y1="51" x2="49" y2="91" stroke={color} strokeWidth="1.2" opacity="0.2" />

    {/* Truck Cab */}
    <path d="M78 58 L98 58 C104 58, 114 66, 118 74 L118 91 C118 93.2, 116.2 95, 114 95 L78 95 Z" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.08" strokeLinejoin="round" />
    {/* Cab Window */}
    <path d="M84 63 L96 63 C100 63, 107 68, 109 74 L84 74 Z" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.15" strokeLinejoin="round" />

    {/* Emergency Siren Beacon on Roof */}
    <path d="M46 39 L54 39 L52 45 L48 45 Z" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.3" strokeLinejoin="round" />
    <path d="M50 34 L50 38" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <path d="M42 36 Q50 31, 58 36" stroke={color} strokeWidth="1.5" opacity="0.4" fill="none" strokeLinecap="round" />
    <path d="M38 31 Q50 24, 62 31" stroke={color} strokeWidth="1.5" opacity="0.2" fill="none" strokeLinecap="round" />

    {/* Integrated Wrench Emblem on Cargo Side */}
    <circle cx="49" cy="71" r="13" stroke={color} strokeWidth="1.5" opacity="0.3" fill={color} fillOpacity="0.08" />
    <path d="M43 77 L55 65" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    <path d="M41 79 L44 76" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <path d="M54 66 L57 63" stroke={color} strokeWidth="3" strokeLinecap="round" />

    {/* Heavy Duty Wheels */}
    <g>
      {/* Rear Wheel */}
      <circle cx="38" cy="96" r="11" stroke={color} strokeWidth="2.5" fill="#1E252B" />
      <circle cx="38" cy="96" r="5" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.2" />
      <circle cx="38" cy="96" r="1.5" fill={color} />
      {/* Front Wheel */}
      <circle cx="98" cy="96" r="11" stroke={color} strokeWidth="2.5" fill="#1E252B" />
      <circle cx="98" cy="96" r="5" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.2" />
      <circle cx="98" cy="96" r="1.5" fill={color} />
    </g>

    {/* Speed / Service Trail Lines behind truck */}
    <line x1="6" y1="60" x2="14" y2="60" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.3" />
    <line x1="2" y1="70" x2="12" y2="70" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    <line x1="8" y1="80" x2="14" y2="80" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.2" />
  </svg>
);

/**
 * Maskinreparation icon – Precision gears & heavy adjustable wrench
 */
export const MachineRepairIcon: React.FC<IconProps> = ({ size = 140, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer tech guide circle */}
    <circle cx="70" cy="70" r="62" stroke={color} strokeWidth="1" opacity="0.1" strokeDasharray="4 4" />

    {/* Secondary Gear (Top Right) */}
    <g opacity="0.4">
      <circle cx="96" cy="44" r="16" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.05" />
      <circle cx="96" cy="44" r="6" stroke={color} strokeWidth="1.5" />
      {/* Gear teeth */}
      <path d="M96 24 L96 28 M96 60 L96 64 M76 44 L80 44 M112 44 L116 44 M82 30 L85 33 M107 55 L110 58 M82 58 L85 55 M107 33 L110 30" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </g>

    {/* Primary Gear (Center Left) */}
    <g>
      <circle cx="56" cy="58" r="28" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.08" />
      <circle cx="56" cy="58" r="12" stroke={color} strokeWidth="2" fill="#1E252B" />
      <circle cx="56" cy="58" r="4" fill={color} opacity="0.6" />
      {/* 8 Gear Teeth */}
      <path d="M56 24 L56 30 M56 86 L56 92 M22 58 L28 58 M84 58 L90 58 M32 34 L36 38 M76 78 L80 82 M32 82 L36 78 M76 38 L80 34" stroke={color} strokeWidth="3" strokeLinecap="round" />
      {/* Inner gear detail ring */}
      <circle cx="56" cy="58" r="20" stroke={color} strokeWidth="1" opacity="0.25" strokeDasharray="3 3" />
    </g>

    {/* Heavy-Duty Adjustable Wrench (Diagonal Overlay) */}
    <g>
      {/* Wrench Shaft */}
      <path d="M42 98 L92 48" stroke={color} strokeWidth="6" strokeLinecap="round" />
      <path d="M42 98 L92 48" stroke="#1E252B" strokeWidth="2" strokeLinecap="round" />
      
      {/* Wrench Head Top (Adjustable Jaw) */}
      <path d="M88 42 L102 28 C106 24, 114 26, 116 32 C118 38, 114 44, 108 46 L98 52 Z" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.2" strokeLinejoin="round" />
      {/* Jaw cutout opening */}
      <path d="M96 34 L106 40" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      {/* Knurled Adjustment Screw */}
      <rect x="84" y="48" width="10" height="6" rx="1.5" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.4" transform="rotate(-45 84 48)" />

      {/* Wrench Handle Loop Base */}
      <circle cx="36" cy="104" r="7" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.15" />
      <circle cx="36" cy="104" r="3" fill={color} />
    </g>

    {/* Spark / Precision Crosshair Accents */}
    <circle cx="108" cy="78" r="2" fill={color} opacity="0.7" />
    <circle cx="116" cy="72" r="1.5" fill={color} opacity="0.4" />
    <circle cx="102" cy="86" r="1" fill={color} opacity="0.5" />
    <path d="M104 22 L112 14 M112 22 L104 14" stroke={color} strokeWidth="1.2" opacity="0.3" strokeLinecap="round" />
  </svg>
);

/**
 * Svetsning icon – Professional MIG/MAG welding torch, electric arc & welding seam
 */
export const WeldingIcon: React.FC<IconProps> = ({ size = 140, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer guide circle */}
    <circle cx="70" cy="70" r="62" stroke={color} strokeWidth="1" opacity="0.1" strokeDasharray="4 4" />

    {/* Heavy Steel Plate Workpiece (Bottom) */}
    <rect x="20" y="92" width="100" height="14" rx="2" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.08" />
    <line x1="20" y1="99" x2="120" y2="99" stroke={color} strokeWidth="1.2" opacity="0.3" />
    
    {/* Steel Joint Line & Welded Seam Beads */}
    <line x1="70" y1="92" x2="70" y2="106" stroke={color} strokeWidth="2" opacity="0.4" />
    {/* Weld bead scalloped texture */}
    <path d="M40 92 Q45 88, 50 92 Q55 88, 60 92 Q65 88, 70 92 Q75 88, 80 92 Q85 88, 90 92 Q95 88, 100 92" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />

    {/* Welding Torch Body (Angled Downward) */}
    <g transform="rotate(-25 60 50)">
      {/* Handle */}
      <rect x="15" y="44" width="38" height="14" rx="3" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.15" />
      <line x1="22" y1="44" x2="22" y2="58" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <line x1="28" y1="44" x2="28" y2="58" stroke={color} strokeWidth="1.5" opacity="0.3" />
      <line x1="34" y1="44" x2="34" y2="58" stroke={color} strokeWidth="1.5" opacity="0.3" />

      {/* Gas Cup / Ceramic Nozzle */}
      <path d="M53 46 L75 48 L75 54 L53 56 Z" stroke={color} strokeWidth="2.5" fill={color} fillOpacity="0.3" strokeLinejoin="round" />
      {/* Tungsten Electrode Tip */}
      <path d="M75 50 L84 51 L75 52 Z" fill={color} />

      {/* Flexible Cable / Hose */}
      <path d="M15 51 Q0 51, 0 65 Q0 78, 12 78" stroke={color} strokeWidth="2.5" fill="none" opacity="0.35" strokeLinecap="round" />
    </g>

    {/* Intense Electric Arc Light / Glow at tip */}
    <circle cx="70" cy="88" r="10" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.2" opacity="0.6" />
    <circle cx="70" cy="88" r="4" fill={color} />
    {/* Arc rays */}
    <line x1="70" y1="74" x2="70" y2="70" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="58" y1="78" x2="54" y2="74" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="82" y1="78" x2="86" y2="74" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="54" y1="88" x2="48" y2="88" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="86" y1="88" x2="92" y2="88" stroke={color} strokeWidth="2" strokeLinecap="round" />

    {/* Dynamic Flying Sparks */}
    <circle cx="82" cy="72" r="1.8" fill={color} />
    <circle cx="90" cy="64" r="1.2" fill={color} opacity="0.8" />
    <circle cx="96" cy="76" r="1.5" fill={color} opacity="0.7" />
    <circle cx="58" cy="68" r="1.2" fill={color} opacity="0.6" />
    <circle cx="50" cy="76" r="1.5" fill={color} opacity="0.8" />
    <circle cx="84" cy="56" r="1" fill={color} opacity="0.5" />

    {/* Spark Trail Lines */}
    <path d="M74 82 Q82 74, 92 78" stroke={color} strokeWidth="1.2" fill="none" opacity="0.5" strokeLinecap="round" />
    <path d="M66 82 Q56 72, 48 78" stroke={color} strokeWidth="1.2" fill="none" opacity="0.4" strokeLinecap="round" />
    <path d="M72 80 Q78 64, 86 60" stroke={color} strokeWidth="1.2" fill="none" opacity="0.4" strokeLinecap="round" />
  </svg>
);

/**
 * Tillverkning icon – Industrial fabrication crane, I-beam & structural assembly
 */
export const ManufacturingIcon: React.FC<IconProps> = ({ size = 140, color = 'currentColor', className }) => (
  <svg width={size} height={size} viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Outer guide circle */}
    <circle cx="70" cy="70" r="62" stroke={color} strokeWidth="1" opacity="0.1" strokeDasharray="4 4" />

    {/* Heavy Industrial Gantry / Tower Crane Structure (Left & Top) */}
    {/* Vertical Mast */}
    <line x1="24" y1="20" x2="24" y2="112" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="34" y1="20" x2="34" y2="112" stroke={color} strokeWidth="2" opacity="0.5" strokeLinecap="round" />
    {/* Mast Cross Lattice Bracing */}
    <path d="M24 30 L34 40 M24 50 L34 60 M24 70 L34 80 M24 90 L34 100" stroke={color} strokeWidth="1.5" opacity="0.4" />
    <path d="M34 30 L24 40 M34 50 L24 60 M34 70 L24 80 M34 90 L24 100" stroke={color} strokeWidth="1.5" opacity="0.4" />

    {/* Horizontal Boom Arm */}
    <line x1="20" y1="24" x2="118" y2="24" stroke={color} strokeWidth="3" strokeLinecap="round" />
    <line x1="34" y1="32" x2="110" y2="32" stroke={color} strokeWidth="1.8" opacity="0.5" />
    {/* Boom Lattice */}
    <path d="M34 24 L44 32 M54 24 L64 32 M74 24 L84 32 M94 24 L104 32" stroke={color} strokeWidth="1.5" opacity="0.4" />

    {/* Trolley & Crane Cable Pulley */}
    <rect x="74" y="21" width="14" height="8" rx="1.5" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.3" />
    <line x1="78" y1="29" x2="78" y2="52" stroke={color} strokeWidth="1.8" />
    <line x1="84" y1="29" x2="84" y2="52" stroke={color} strokeWidth="1.8" />

    {/* Heavy Lifting Hook Block */}
    <rect x="75" y="52" width="12" height="10" rx="2" stroke={color} strokeWidth="2" fill="#1E252B" />
    <path d="M81 62 C81 68, 75 70, 75 74 C75 78, 81 80, 85 78" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" />

    {/* Steel I-Beam Being Precision Lifted (Center Right) */}
    <g transform="rotate(-6 80 82)">
      {/* Upper Flange */}
      <rect x="46" y="70" width="68" height="6" rx="1.5" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.2" />
      {/* Web */}
      <rect x="75" y="76" width="10" height="20" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.1" />
      {/* Lower Flange */}
      <rect x="46" y="96" width="68" height="6" rx="1.5" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.2" />
      {/* Structural Rivets / Bolts on Flange */}
      <circle cx="54" cy="73" r="1.2" fill={color} />
      <circle cx="106" cy="73" r="1.2" fill={color} />
      <circle cx="54" cy="99" r="1.2" fill={color} />
      <circle cx="106" cy="99" r="1.2" fill={color} />
    </g>

    {/* Rigging Sling Straps attached to Beam */}
    <line x1="81" y1="76" x2="62" y2="82" stroke={color} strokeWidth="1.5" opacity="0.6" strokeDasharray="3 2" />
    <line x1="81" y1="76" x2="100" y2="78" stroke={color} strokeWidth="1.5" opacity="0.6" strokeDasharray="3 2" />

    {/* Ground Base Pad */}
    <rect x="18" y="112" width="22" height="6" rx="1.5" stroke={color} strokeWidth="2" fill={color} fillOpacity="0.3" />
  </svg>
);
