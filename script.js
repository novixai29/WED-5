/* ==========================================================
   WED-005 — BAGHDAD INK

   غيّر بيانات الزبون من هنا فقط
========================================================== */

const WEDDING = {

  /* ========================================================
     COUPLE
  ======================================================== */

  groom:
    "علي",

  bride:
    "شهد",


  groomEnglish:
    "ALI",

  brideEnglish:
    "SHAHAD",


  /* ========================================================
     FATHER
  ======================================================== */

  groomFather:
    "السيد فاضل كريم",

  brideFather:
    "",


  /* ========================================================
     EVENT
  ======================================================== */

  startAt:
    "2027-10-14T18:00:00+03:00",

  durationHours:
    3,

  timeZone:
    "Asia/Baghdad",


  /* ========================================================
     VENUE
  ======================================================== */

  venue:
    "قاعة الرشيد",

  city:
    "بغداد",

  address:
    "بغداد - العراق",


  /* ========================================================
     GOOGLE MAPS
  ======================================================== */

  mapsUrl:
    "",


  /* ========================================================
     FINAL INVITATION URL
  ======================================================== */

  shareUrl:
    "",


  /* ========================================================
     PAGE
  ======================================================== */

  title:
    "دعوة زفاف علي وشهد",


  /* ========================================================
     TEXT
  ======================================================== */

  heroMessage:
    "في ليلة يطيب بها اللقاء ويكتمل الفرح بحضور الأحبة",


  invitationText:
    "من دار تفرح بأهلها وأحبتها يتشرف السيد فاضل كريم بدعوتكم لمشاركته فرحة زفاف ابنه علي على الآنسة شهد في ليلة يطيب بها اللقاء ويكتمل الفرح بحضور الأحبة.",


  /* ========================================================
     OPENING
  ======================================================== */

  openingStorageKey:
    "WED005_BAGHDAD_INK_OPENED"

};



/* ==========================================================
   HELPERS
========================================================== */

const $ = (selector) =>
  document.querySelector(selector);



function setText(
  selector,
  value
) {

  const element =
    $(selector);


  if (element) {

    element.textContent =
      value;

  }

}



/* ==========================================================
   DATE
========================================================== */

const EVENT_DATE =
  new Date(
    WEDDING.startAt
  );



function getArabicDateParts() {

  const weekday =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        weekday:
          "long",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const fullDate =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        day:
          "numeric",

        month:
          "long",

        year:
          "numeric",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const time =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        hour:
          "numeric",

        minute:
          "2-digit",

        hour12:
          true,

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  return {
    weekday,
    fullDate,
    time
  };

}



function getEnglishDateParts() {

  const day =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        day:
          "2-digit",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const month =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        month:
          "short",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      )
      .toUpperCase();


  const year =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        year:
          "numeric",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const time =
    new Intl.DateTimeFormat(
      "en-US",
      {
        hour:
          "numeric",

        minute:
          "2-digit",

        hour12:
          true,

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  return {
    day,
    month,
    year,
    time
  };

}



/* ==========================================================
   FATHER NAME
========================================================== */

function cleanHonorific(
  name
) {

  return name
    .replace(
      /^السيد\s+/u,
      ""
    )
    .trim();

}



/* ==========================================================
   RENDER DATA
========================================================== */

function renderWeddingData() {

  const arabic =
    getArabicDateParts();


  const english =
    getEnglishDateParts();


  const couple =
    `${WEDDING.groom} × ${WEDDING.bride}`;


  document.title =
    WEDDING.title;



  /* ========================================================
     OPENING
  ======================================================== */

  setText(
    "#openingFather",
    WEDDING.groomFather
  );


  setText(
    "#openingTitle",
    couple
  );


  setText(
    "#openingDate",
    `${english.day} · ${english.month} · ${english.year}`
  );



  /* ========================================================
     HERO
  ======================================================== */

  setText(
    "#heroReference",
    `${english.day} / ${english.month} / ${english.year}`
  );


  setText(
    "#fatherName",
    WEDDING.groomFather
  );


  setText(
    "#groomName",
    WEDDING.groom
  );


  setText(
    "#brideName",
    WEDDING.bride
  );


  setText(
    "#heroMessage",
    WEDDING.heroMessage
  );


  setText(
    "#heroDay",
    english.day
  );


  setText(
    "#heroMonth",
    english.month
  );


  setText(
    "#heroYear",
    english.year
  );


  setText(
    "#heroTime",
    english.time
  );



  /* ========================================================
     INVITATION
  ======================================================== */

  setText(
    "#invitationText",
    WEDDING.invitationText
  );


  setText(
    "#fatherSignature",
    cleanHonorific(
      WEDDING.groomFather
    )
  );



  /* ========================================================
     DATE
  ======================================================== */

  setText(
    "#dateDay",
    english.day
  );


  setText(
    "#dateMonth",
    english.month
  );


  setText(
    "#dateYear",
    english.year
  );


  setText(
    "#eventWeekday",
    arabic.weekday
  );


  setText(
    "#eventDate",
    arabic.fullDate
  );


  setText(
    "#eventTime",
    arabic.time
  );



  /* ========================================================
     VENUE
  ======================================================== */

  setText(
    "#venueTitle",
    WEDDING.venue
  );


  setText(
    "#venueCity",
    WEDDING.city
  );


  setText(
    "#venueAddress",
    WEDDING.address
  );



  /* ========================================================
     CLOSING
  ======================================================== */

  setText(
    "#closingNames",
    couple
  );


  setText(
    "#closingFather",
    WEDDING.groomFather
  );


  setText(
    "#closingDate",
    `${english.day} · ${english.month} · ${english.year}`
  );


  setText(
    "#footerNames",
    `${WEDDING.groomEnglish} × ${WEDDING.brideEnglish}`
  );

}



/* ==========================================================
   OPENING
========================================================== */

const inkOpening =
  $("#inkOpening");


const enterInvitation =
  $("#enterInvitation");


const invitationMain =
  $("#invitationMain");


const reduceMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );



function invitationWasOpened() {

  try {

    return (
      sessionStorage.getItem(
        WEDDING.openingStorageKey
      ) === "true"
    );

  } catch {

    return false;

  }

}



function rememberOpening() {

  try {

    sessionStorage.setItem(
      WEDDING.openingStorageKey,
      "true"
    );

  } catch {

    /* ignore */

  }

}



function completeOpening() {

  inkOpening
    .classList
    .add(
      "is-complete"
    );


  inkOpening
    .setAttribute(
      "aria-hidden",
      "true"
    );


  document.body
    .classList
    .add(
      "invitation-ready"
    );


  document.body.style.overflow =
    "";


  window.setTimeout(
    () => {

      invitationMain.focus({
        preventScroll:
          true
      });

    },
    70
  );

}



function openInkInvitation() {

  if (
    inkOpening
      .classList
      .contains(
        "is-opening"
      )
  ) {

    return;

  }


  rememberOpening();


  if (
    reduceMotion.matches
  ) {

    completeOpening();

    return;

  }


  /*
    STEP 1
    نقطة الحبر تظهر
    والخط يبدأ بالرسم
  */

  inkOpening
    .classList
    .add(
      "is-opening"
    );


  /*
    STEP 2
    بعد اكتمال الخط تختفي الشاشة
  */

  window.setTimeout(
    () => {

      inkOpening
        .classList
        .add(
          "opening-finish"
        );

    },
    1250
  );


  /*
    STEP 3
    دخول الموقع
  */

  window.setTimeout(
    () => {

      completeOpening();

    },
    1850
  );

}



function initializeOpening() {

  if (
    invitationWasOpened()
  ) {

    inkOpening
      .classList
      .add(
        "is-complete"
      );


    inkOpening
      .setAttribute(
        "aria-hidden",
        "true"
      );


    document.body
      .classList
      .add(
        "invitation-ready"
      );


    return;

  }


  document.body
    .classList
    .remove(
      "invitation-ready"
    );

}



enterInvitation
  .addEventListener(
    "click",
    openInkInvitation
  );



/* ==========================================================
   COUNTDOWN
========================================================== */

let countdownTimer =
  null;



function padCountdown(
  number
) {

  return String(
    Math.max(
      0,
      number
    )
  )
    .padStart(
      2,
      "0"
    );

}



function updateCountdown() {

  const difference =
    EVENT_DATE.getTime() -
    Date.now();


  if (
    difference <= 0
  ) {

    setText(
      "#days",
      "00"
    );


    setText(
      "#hours",
      "00"
    );


    setText(
      "#minutes",
      "00"
    );


    setText(
      "#seconds",
      "00"
    );


    setText(
      "#countdownStatus",
      "حل موعد الفرح"
    );


    if (
      countdownTimer
    ) {

      clearInterval(
        countdownTimer
      );

    }


    return;

  }


  const second =
    1000;


  const minute =
    second * 60;


  const hour =
    minute * 60;


  const day =
    hour * 24;


  const days =
    Math.floor(
      difference /
      day
    );


  const hours =
    Math.floor(
      (
        difference %
        day
      ) /
      hour
    );


  const minutes =
    Math.floor(
      (
        difference %
        hour
      ) /
      minute
    );


  const seconds =
    Math.floor(
      (
        difference %
        minute
      ) /
      second
    );


  setText(
    "#days",
    padCountdown(
      days
    )
  );


  setText(
    "#hours",
    padCountdown(
      hours
    )
  );


  setText(
    "#minutes",
    padCountdown(
      minutes
    )
  );


  setText(
    "#seconds",
    padCountdown(
      seconds
    )
  );

}



function initializeCountdown() {

  updateCountdown();


  countdownTimer =
    window.setInterval(
      updateCountdown,
      1000
    );

}



/* ==========================================================
   GOOGLE MAPS
========================================================== */

function getMapsUrl() {

  if (
    WEDDING.mapsUrl &&
    WEDDING.mapsUrl.trim()
  ) {

    return (
      WEDDING.mapsUrl.trim()
    );

  }


  const query =
    [
      WEDDING.venue,
      WEDDING.address
    ]
      .filter(Boolean)
      .join(" ");


  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      query
    )
  );

}



function initializeMaps() {

  $("#mapsButton").href =
    getMapsUrl();

}



/* ==========================================================
   SHARE URL
========================================================== */

function getShareUrl() {

  if (
    WEDDING.shareUrl &&
    WEDDING.shareUrl.trim()
  ) {

    return (
      WEDDING.shareUrl.trim()
    );

  }


  return window.location.href;

}



/* ==========================================================
   ICS
========================================================== */

function pad2(
  value
) {

  return String(
    value
  )
    .padStart(
      2,
      "0"
    );

}



function formatUTCForICS(
  date
) {

  return (
    date.getUTCFullYear() +

    pad2(
      date.getUTCMonth() + 1
    ) +

    pad2(
      date.getUTCDate()
    ) +

    "T" +

    pad2(
      date.getUTCHours()
    ) +

    pad2(
      date.getUTCMinutes()
    ) +

    pad2(
      date.getUTCSeconds()
    ) +

    "Z"
  );

}



function escapeICS(
  value
) {

  return String(
    value
  )
    .replace(
      /\\/g,
      "\\\\"
    )
    .replace(
      /\n/g,
      "\\n"
    )
    .replace(
      /,/g,
      "\\,"
    )
    .replace(
      /;/g,
      "\\;"
    );

}



function createICS() {

  const start =
    new Date(
      WEDDING.startAt
    );


  const end =
    new Date(
      start.getTime() +
      WEDDING.durationHours *
      60 *
      60 *
      1000
    );


  const now =
    new Date();


  const shareUrl =
    getShareUrl();


  const location =
    [
      WEDDING.venue,
      WEDDING.address
    ]
      .filter(Boolean)
      .join(" - ");


  const description =
    `يسر ${WEDDING.groomFather} دعوتكم لحضور حفل زفاف ابنه ${WEDDING.groom} على الآنسة ${WEDDING.bride}.${shareUrl ? ` رابط الدعوة: ${shareUrl}` : ""}`;


  const uid =
    `wed005-${start.getTime()}@inviteus.party`;


  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//InviteUs//Baghdad Ink//AR
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${formatUTCForICS(now)}
DTSTART:${formatUTCForICS(start)}
DTEND:${formatUTCForICS(end)}
SUMMARY:${escapeICS(`زفاف ${WEDDING.groom} و${WEDDING.bride}`)}
DESCRIPTION:${escapeICS(description)}
LOCATION:${escapeICS(location)}
URL:${escapeICS(shareUrl)}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

}



/* ==========================================================
   DOWNLOAD CALENDAR
========================================================== */

function downloadICS() {

  const ics =
    createICS();


  const blob =
    new Blob(
      [ics],
      {
        type:
          "text/calendar;charset=utf-8"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    `wedding-${WEDDING.groom}-${WEDDING.bride}.ics`;


  document.body
    .appendChild(
      link
    );


  link.click();


  link.remove();


  window.setTimeout(
    () => {

      URL.revokeObjectURL(
        url
      );

    },
    500
  );


  showToast(
    "تم إنشاء ملف التقويم"
  );

}



$("#calendarButton")
  .addEventListener(
    "click",
    downloadICS
  );



/* ==========================================================
   SHARE
========================================================== */

function getShareText() {

  const date =
    getArabicDateParts();


  return (
    `يسر ${WEDDING.groomFather} دعوتكم لحضور حفل زفاف ابنه ` +
    `${WEDDING.groom} على الآنسة ${WEDDING.bride}، ` +
    `وذلك يوم ${date.weekday} ${date.fullDate} ` +
    `في ${WEDDING.venue}.`
  );

}



async function copyToClipboard(
  text
) {

  if (
    navigator.clipboard &&
    window.isSecureContext
  ) {

    await navigator.clipboard
      .writeText(
        text
      );


    return;

  }


  const textarea =
    document.createElement(
      "textarea"
    );


  textarea.value =
    text;


  textarea.setAttribute(
    "readonly",
    ""
  );


  textarea.style.position =
    "fixed";


  textarea.style.opacity =
    "0";


  document.body
    .appendChild(
      textarea
    );


  textarea.select();


  document.execCommand(
    "copy"
  );


  textarea.remove();

}



async function shareInvitation() {

  const text =
    getShareText();


  const url =
    getShareUrl();


  if (
    navigator.share
  ) {

    try {

      await navigator.share(
        {
          title:
            WEDDING.title,

          text:
            text,

          url:
            url
        }
      );


      return;

    } catch (
      error
    ) {

      if (
        error?.name ===
        "AbortError"
      ) {

        return;

      }

    }

  }


  try {

    await copyToClipboard(
      `${text}\n${url}`
    );


    showToast(
      "تم نسخ نص الدعوة والرابط"
    );

  } catch {

    showToast(
      "تعذر نسخ رابط الدعوة"
    );

  }

}



$("#shareButton")
  .addEventListener(
    "click",
    shareInvitation
  );



/* ==========================================================
   TOAST
========================================================== */

let toastTimer =
  null;



function showToast(
  message
) {

  const toast =
    $("#toast");


  toast.textContent =
    message;


  toast
    .classList
    .add(
      "is-visible"
    );


  if (
    toastTimer
  ) {

    clearTimeout(
      toastTimer
    );

  }


  toastTimer =
    window.setTimeout(
      () => {

        toast
          .classList
          .remove(
            "is-visible"
          );

      },
      2600
    );

}



/* ==========================================================
   SCROLL REVEAL
========================================================== */

function initializeReveal() {

  const elements =
    document
      .querySelectorAll(
        ".reveal"
      );


  if (
    reduceMotion.matches ||
    !(
      "IntersectionObserver"
      in window
    )
  ) {

    elements.forEach(
      (element) => {

        element
          .classList
          .add(
            "is-visible"
          );

      }
    );


    return;

  }


  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target
                .classList
                .add(
                  "is-visible"
                );


              observer
                .unobserve(
                  entry.target
                );

            }

          }
        );

      },

      {
        threshold:
          0.14,

        rootMargin:
          "0px 0px -40px 0px"
      }

    );


  elements.forEach(
    (element) => {

      observer.observe(
        element
      );

    }
  );

}



/* ==========================================================
   INITIALIZE
========================================================== */

function initialize() {

  renderWeddingData();

  initializeOpening();

  initializeCountdown();

  initializeMaps();

  initializeReveal();

}



document.addEventListener(
  "DOMContentLoaded",
  initialize
);
