<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS language="ar" version="2.1">
  <context>
    <name>AboutData</name>
    <message>
      <location filename="../src/libcalamares/CalamaresAbout.cpp" line="17"/>
      <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt; for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;</source>
      <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt; إلى %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/CalamaresAbout.cpp" line="20"/>
      <source>Thanks to &lt;a href="https://calamares.io/team/"&gt;the Calamares team&lt;/a&gt; and the &lt;a href="https://app.transifex.com/calamares/calamares/"&gt;Calamares translators team&lt;/a&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/CalamaresAbout.cpp" line="25"/>
      <source>&lt;a href="https://calamares.io/"&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href="http://www.blue-systems.com/"&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/CalamaresAbout.cpp" line="40"/>
      <source>Copyright %1-%2 %3 &amp;lt;%4&amp;gt;&lt;br/&gt;</source>
      <extracomment>Copyright year-year Name &lt;email-address&gt;</extracomment>
      <translation>حقوق النشر %1-%2 %3 &amp;lt;%4&amp;gt;&lt;br/&gt;</translation>
    </message>
  </context>
  <context>
    <name>AutoMountManagementJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/AutoMountManagementJob.cpp" line="22"/>
      <source>Manage auto-mount settings</source>
      <translation>ضبط إعدادات الارتباط التلقائي</translation>
    </message>
  </context>
  <context>
    <name>BootInfoWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="60"/>
      <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
      <translation>&lt;strong&gt;بيئة الإقلاع&lt;/strong&gt; لهذا النّظام.&lt;br&gt;&lt;br&gt; يدعم فقط أنظمة x86 القديمة &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;غالبًا ما تستخدم الأنظمة الجديدة &lt;strong&gt;EFI&lt;/strong&gt;، ولكن ما زال بإمكانك إظهاره ك‍ BIOS إن بدأته بوضع التّوافقيّة.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="70"/>
      <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
      <translation>بدأ هذا النّظام ببيئة إقلاع &lt;strong&gt;EFI&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;لضبط البدء من بيئة EFI، يجب على المثبّت وضع تطبيق محمّل إقلاع، مثل &lt;strong&gt;GRUB&lt;/strong&gt; أو &lt;strong&gt;systemd-boot&lt;/strong&gt; على &lt;strong&gt;قسم نظام EFI&lt;/strong&gt;. هذا الأمر آليّ، إلّا إن اخترت التّقسيم يدويًّا، حيث عليك اخيتاره أو إنشاؤه بنفسك.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="82"/>
      <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
      <translation>بدأ هذا النّظام ببيئة إقلاع &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;لضبط البدء من بيئة BIOS، يجب على المثبّت وضع تطبيق محمّل إقلاع، مثل &lt;strong&gt;GRUB&lt;/strong&gt;، إمّا في بداية قسم أو في &lt;strong&gt;قطاع الإقلاع الرّئيس&lt;/strong&gt; قرب بداية جدول التّقسيم (محبّذ). هذا الأمر آليّ، إلّا إن اخترت التّقسيم يدويًّا، حيث عليك اخيتاره أو إنشاؤه بنفسك.</translation>
    </message>
  </context>
  <context>
    <name>BootLoaderModel</name>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="60"/>
      <source>Master Boot Record of %1</source>
      <translation>قطاع الإقلاع الرئيسي ل %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="93"/>
      <source>Boot Partition</source>
      <translation>قسم الإقلاع</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="100"/>
      <source>System Partition</source>
      <translation>قسم النظام</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="131"/>
      <source>Do not install a boot loader</source>
      <translation>لا تثبّت محمّل إقلاع</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="148"/>
      <source>%1 (%2)</source>
      <translation>%1 (%2)</translation>
    </message>
  </context>
  <context>
    <name>Calamares::BlankViewStep</name>
    <message>
      <location filename="../src/libcalamaresui/viewpages/BlankViewStep.cpp" line="61"/>
      <source>Blank Page</source>
      <translation>صفحة فارغة</translation>
    </message>
  </context>
  <context>
    <name>Calamares::DebugWindow</name>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="28"/>
      <source>GlobalStorage</source>
      <translation>التّخزين العموميّ</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="38"/>
      <source>JobQueue</source>
      <translation>صفّ المهامّ</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="48"/>
      <source>Modules</source>
      <translation>الوحدات</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="61"/>
      <source>Type:</source>
      <translation>النوع:</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="68"/>
      <location filename="../src/calamares/DebugWindow.ui" line="82"/>
      <source>none</source>
      <translation>لاشيء</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="75"/>
      <source>Interface:</source>
      <translation>الواجهة:</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="102"/>
      <source>Crashes Calamares, so that Dr. Konqui can look at it.</source>
      <translation>يُعطِّل كالاماري، حتى يتفقد د. كونكي الأمر.</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="115"/>
      <source>Reloads the stylesheet from the branding directory.</source>
      <translation>يعيد تحميل صفحة الطُرز من الدليل المميز.</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="141"/>
      <source>Uploads the session log to the configured pastebin.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="144"/>
      <source>Send Session Log</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="118"/>
      <source>Reload Stylesheet</source>
      <translation>إعادة تحميل ورقة الأنماط</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="128"/>
      <source>Displays the tree of widget names in the log (for stylesheet debugging).</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="131"/>
      <source>Widget Tree</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.cpp" line="164"/>
      <source>Debug information</source>
      <translation>معلومات التّنقيح</translation>
    </message>
  </context>
  <context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
      <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="76"/>
      <source>%p%</source>
      <comment>Progress percentage indicator: %p is where the number 0..100 is placed</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="116"/>
      <source>Set up</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="116"/>
      <source>Install</source>
      <translation>ثبت </translation>
    </message>
  </context>
  <context>
    <name>Calamares::FailJob</name>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="29"/>
      <source>Job failed (%1)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="30"/>
      <source>Programmed job failure was explicitly requested.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>Calamares::JobThread</name>
    <message>
      <location filename="../src/libcalamares/JobQueue.cpp" line="203"/>
      <source>Done</source>
      <translation>انتهى</translation>
    </message>
  </context>
  <context>
    <name>Calamares::NamedJob</name>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="17"/>
      <source>Example job (%1)</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>Calamares::ProcessJob</name>
    <message>
      <location filename="../src/libcalamares/ProcessJob.cpp" line="39"/>
      <source>Run command '%1' in target system.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/ProcessJob.cpp" line="39"/>
      <source> Run command '%1'.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/ProcessJob.cpp" line="45"/>
      <source>Running command %1 %2</source>
      <translation>يشغّل الأمر %1 %2</translation>
    </message>
  </context>
  <context>
    <name>Calamares::PythonJob</name>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="233"/>
      <source>Running %1 operation.</source>
      <translation>يشغّل عمليّة %1.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="262"/>
      <source>Bad working directory path</source>
      <translation>مسار سيء لمجلد العمل</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="263"/>
      <source>Working directory %1 for python job %2 is not readable.</source>
      <translation>لا يمكن القراءة من مجلد العمل %1 الخاص بعملية بايثون %2.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="269"/>
      <source>Bad main script file</source>
      <translation>ملفّ السّكربت الرّئيس سيّء.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="270"/>
      <source>Main script file %1 for python job %2 is not readable.</source>
      <translation>ملفّ السّكربت الرّئيس %1 لمهمّة بايثون %2 لا يمكن قراءته.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="343"/>
      <source>Boost.Python error in job "%1".</source>
      <translation>خطأ Boost.Python في العمل "%1".</translation>
    </message>
  </context>
  <context>
    <name>Calamares::QmlViewStep</name>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="68"/>
      <source>Loading ...</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="89"/>
      <source>QML Step &lt;i&gt;%1&lt;/i&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="266"/>
      <source>Loading failed.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>Calamares::RequirementsChecker</name>
    <message>
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="99"/>
      <source>Requirements checking for module '%1' is complete.</source>
      <translation type="unfinished"/>
    </message>
    <message numerus="yes">
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="123"/>
      <source>Waiting for %n module(s).</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="124"/>
      <source>(%n second(s))</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message>
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="129"/>
      <source>System-requirements checking is complete.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>Calamares::ViewManager</name>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="156"/>
      <source>Setup Failed</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="156"/>
      <source>Installation Failed</source>
      <translation>فشل التثبيت</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="159"/>
      <source>Error</source>
      <translation>خطأ</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="90"/>
      <source>&amp;Yes</source>
      <translation>&amp;نعم</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="91"/>
      <source>&amp;No</source>
      <translation>&amp;لا</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="92"/>
      <source>&amp;Close</source>
      <translation>&amp;اغلاق</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/utils/Paste.cpp" line="183"/>
      <source>Install Log Paste URL</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/utils/Paste.cpp" line="165"/>
      <source>The upload was unsuccessful. No web-paste was done.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/utils/Paste.cpp" line="177"/>
      <source>Install log posted to

%1

Link copied to clipboard</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="184"/>
      <source>Calamares Initialization Failed</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="185"/>
      <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="191"/>
      <source>&lt;br/&gt;The following modules could not be loaded:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="333"/>
      <source>Continue with setup?</source>
      <translation>الإستمرار في التثبيت؟</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="333"/>
      <source>Continue with installation?</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="335"/>
      <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="338"/>
      <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
      <translation>مثبّت %1 على وشك بإجراء تعديلات على قرصك لتثبيت %2.&lt;br/&gt;&lt;strong&gt;لن تستطيع التّراجع عن هذا.&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="341"/>
      <source>&amp;Set up now</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="341"/>
      <source>&amp;Install now</source>
      <translation>&amp;ثبت الأن</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="348"/>
      <source>Go &amp;back</source>
      <translation>&amp;إرجع</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="395"/>
      <source>&amp;Set up</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="395"/>
      <source>&amp;Install</source>
      <translation>&amp;ثبت</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="397"/>
      <source>Setup is complete. Close the setup program.</source>
      <translation>اكتمل الإعداد. أغلق برنامج الإعداد.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="398"/>
      <source>The installation is complete. Close the installer.</source>
      <translation>اكتمل التثبيت , اغلق المثبِت</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="400"/>
      <source>Cancel setup without changing the system.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="401"/>
      <source>Cancel installation without changing the system.</source>
      <translation>الغاء الـ تثبيت من دون احداث تغيير في النظام</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="411"/>
      <source>&amp;Next</source>
      <translation>&amp;التالي</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="416"/>
      <source>&amp;Back</source>
      <translation>&amp;رجوع</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="422"/>
      <source>&amp;Done</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="441"/>
      <source>&amp;Cancel</source>
      <translation>&amp;إلغاء</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="513"/>
      <source>Cancel setup?</source>
      <translation>إلغاء الإعداد؟</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="513"/>
      <source>Cancel installation?</source>
      <translation>إلغاء التثبيت؟</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="514"/>
      <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
      <translation>هل تريد حقًا إلغاء عملية الإعداد الحالية؟
سيتم إنهاء برنامج الإعداد وسيتم فقد جميع التغييرات.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="516"/>
      <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
      <translation>أتريد إلغاء عمليّة التّثبيت الحاليّة؟
سيخرج المثبّت وتضيع كلّ التّغييرات.</translation>
    </message>
  </context>
  <context>
    <name>CalamaresPython::Helper</name>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="307"/>
      <source>Unknown exception type</source>
      <translation>نوع الاستثناء غير معروف</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="325"/>
      <source>unparseable Python error</source>
      <translation>خطأ بايثون لا يمكن تحليله</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="369"/>
      <source>unparseable Python traceback</source>
      <translation>تتبّع بايثون خلفيّ لا يمكن تحليله</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="376"/>
      <source>Unfetchable Python error.</source>
      <translation>خطأ لا يمكن الحصول علية في بايثون.</translation>
    </message>
  </context>
  <context>
    <name>CalamaresWindow</name>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="403"/>
      <source>%1 Setup Program</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="404"/>
      <source>%1 Installer</source>
      <translation>%1 المثبت</translation>
    </message>
  </context>
  <context>
    <name>ChangeFilesystemLabelJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="34"/>
      <source>Set filesystem label on %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="41"/>
      <source>Set filesystem label &lt;strong&gt;%1&lt;/strong&gt; to partition &lt;strong&gt;%2&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="71"/>
      <location filename="../src/modules/partition/jobs/ChangeFilesystemLabelJob.cpp" line="83"/>
      <source>The installer failed to update partition table on disk '%1'.</source>
      <translation>فشل المثبّت في تحديث جدول التّقسيم على القرص '%1'.</translation>
    </message>
  </context>
  <context>
    <name>CheckerContainer</name>
    <message>
      <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="38"/>
      <source>Gathering system information...</source>
      <translation>يجمع معلومات النّظام...</translation>
    </message>
  </context>
  <context>
    <name>ChoicePage</name>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="137"/>
      <source>Select storage de&amp;vice:</source>
      <translation>اختر &amp;جهاز التّخزين:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="138"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1024"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1075"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1128"/>
      <source>Current:</source>
      <translation>الحاليّ:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="139"/>
      <source>After:</source>
      <translation>بعد:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1649"/>
      <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself.</source>
      <translation>&lt;strong&gt;تقسيم يدويّ&lt;/strong&gt;&lt;br/&gt;يمكنك إنشاء أو تغيير حجم الأقسام بنفسك.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="891"/>
      <source>Reuse %1 as home partition for %2.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1025"/>
      <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
      <translation>&lt;strong&gt;اختر قسمًا لتقليصه، ثمّ اسحب الشّريط السّفليّ لتغيير حجمه &lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1049"/>
      <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1677"/>
      <source>Boot loader location:</source>
      <translation>مكان محمّل الإقلاع:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1119"/>
      <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
      <translation>&lt;strong&gt;اختر القسم حيث سيكون التّثبيت عليه&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1179"/>
      <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
      <translation>تعذّر إيجاد قسم النّظام EFI في أيّ مكان. فضلًا ارجع واستخدم التّقسيم اليدويّ لإعداد %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1187"/>
      <source>The EFI system partition at %1 will be used for starting %2.</source>
      <translation>قسم النّظام EFI على %1 سيُستخدم لبدء %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1195"/>
      <source>EFI system partition:</source>
      <translation>قسم نظام EFI:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1324"/>
      <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>لا يبدو أن في جهاز التّخزين أيّ نظام تشغيل. ما الذي تودّ فعله؟&lt;br/&gt;يمكنك مراجعة الاختيارات وتأكيدها قبل تطبيقها على جهاز التّخزين.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1329"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1366"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1387"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1412"/>
      <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color="red"&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
      <translation>&lt;strong&gt;مسح القرص&lt;/strong&gt;&lt;br/&gt;هذا س&lt;font color="red"&gt;يمسح&lt;/font&gt; كلّ البيانات الموجودة في جهاز التّخزين المحدّد.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1333"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1362"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1383"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1408"/>
      <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
      <translation>&lt;strong&gt;ثبّت جنبًا إلى جنب&lt;/strong&gt;&lt;br/&gt;سيقلّص المثبّت قسمًا لتفريغ مساحة لِ‍ %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1337"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1370"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1391"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1416"/>
      <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
      <translation>&lt;strong&gt;استبدل قسمًا&lt;/strong&gt;&lt;br/&gt;يستبدل قسمًا مع %1 .</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1356"/>
      <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>على جهاز التّخزين %1. ما الذي تودّ فعله؟&lt;br/&gt;يمكنك مراجعة الاختيارات وتأكيدها قبل تطبيقها على جهاز التّخزين.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1378"/>
      <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>على جهاز التّخزين هذا نظام تشغيل ذأصلًا. ما الذي تودّ فعله؟&lt;br/&gt;يمكنك مراجعة الاختيارات وتأكيدها قبل تطبيقها على جهاز التّخزين.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1403"/>
      <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>على جهاز التّخزين هذا عدّة أنظمة تشغيل. ما الذي تودّ فعله؟&lt;br/&gt;يمكنك مراجعة الاختيارات وتأكيدها قبل تطبيقها على جهاز التّخزين.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1475"/>
      <source>This storage device already has an operating system on it, but the partition table &lt;strong&gt;%1&lt;/strong&gt; is different from the needed &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1498"/>
      <source>This storage device has one of its partitions &lt;strong&gt;mounted&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1503"/>
      <source>This storage device is a part of an &lt;strong&gt;inactive RAID&lt;/strong&gt; device.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1618"/>
      <source>No Swap</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1627"/>
      <source>Reuse Swap</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1630"/>
      <source>Swap (no Hibernate)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1633"/>
      <source>Swap (with Hibernate)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1636"/>
      <source>Swap to file</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ClearMountsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="272"/>
      <source>Successfully unmounted %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="279"/>
      <source>Successfully disabled swap %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="305"/>
      <source>Successfully cleared swap %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="319"/>
      <source>Successfully closed mapper device %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="332"/>
      <source>Successfully disabled volume group %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="371"/>
      <source>Clear mounts for partitioning operations on %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="377"/>
      <source>Clearing mounts for partitioning operations on %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="396"/>
      <source>Cleared all mounts for %1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ClearTempMountsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="33"/>
      <source>Clear all temporary mounts.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="40"/>
      <source>Clearing all temporary mounts.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="70"/>
      <source>Cleared all temporary mounts.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>CommandList</name>
    <message>
      <location filename="../src/libcalamares/utils/CommandList.cpp" line="164"/>
      <source>Could not run command.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CommandList.cpp" line="165"/>
      <source>The commands use variables that are not defined. Missing variables are: %1.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>Config</name>
    <message>
      <location filename="../src/modules/keyboard/Config.cpp" line="505"/>
      <source>Set keyboard model to %1.&lt;br/&gt;</source>
      <translation>اضبط طراز لوحة المفتاتيح ليكون %1.&lt;br/&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/Config.cpp" line="512"/>
      <source>Set keyboard layout to %1/%2.</source>
      <translation>اضبط تخطيط لوحة المفاتيح إلى %1/%2.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="373"/>
      <source>Set timezone to %1/%2.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="410"/>
      <source>The system language will be set to %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="417"/>
      <source>The numbers and dates locale will be set to %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="53"/>
      <source>Network Installation. (Disabled: Incorrect configuration)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="55"/>
      <source>Network Installation. (Disabled: Received invalid groups data)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="57"/>
      <source>Network Installation. (Disabled: Internal error)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="61"/>
      <source>Network Installation. (Disabled: No package list)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="76"/>
      <source>Package selection</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="59"/>
      <source>Network Installation. (Disabled: Unable to fetch package lists, check your network connection)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="57"/>
      <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="60"/>
      <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="66"/>
      <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="70"/>
      <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
      <translation>لا يستوفِ هذا الحاسوب بعض المتطلّبات المستحسنة لتثبيت %1.&lt;br/&gt;يمكن للمثبّت المتابعة، ولكن قد تكون بعض الميزات معطّلة.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="80"/>
      <source>This program will ask you some questions and set up %2 on your computer.</source>
      <translation>سيطرح البرنامج بعض الأسئلة عليك ويعدّ %2 على حاسوبك.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="264"/>
      <source>&lt;h1&gt;Welcome to the Calamares setup program for %1&lt;/h1&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="265"/>
      <source>&lt;h1&gt;Welcome to %1 setup&lt;/h1&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="269"/>
      <source>&lt;h1&gt;Welcome to the Calamares installer for %1&lt;/h1&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="270"/>
      <source>&lt;h1&gt;Welcome to the %1 installer&lt;/h1&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="235"/>
      <source>Your username is too long.</source>
      <translation>اسم المستخدم طويل جدًّا.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="251"/>
      <source>'%1' is not allowed as username.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="241"/>
      <source>Your username must start with a lowercase letter or underscore.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="245"/>
      <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="300"/>
      <source>Your hostname is too short.</source>
      <translation>اسم المضيف قصير جدًّا.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="304"/>
      <source>Your hostname is too long.</source>
      <translation>اسم المضيف طويل جدًّا.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="310"/>
      <source>'%1' is not allowed as hostname.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="315"/>
      <source>Only letters, numbers, underscore and hyphen are allowed.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="598"/>
      <source>Your passwords do not match!</source>
      <translation>لا يوجد تطابق في كلمات السر!</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="612"/>
      <source>OK!</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="142"/>
      <source>Setup Failed</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="142"/>
      <source>Installation Failed</source>
      <translation>فشل التثبيت</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="144"/>
      <source>The setup of %1 did not complete successfully.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="145"/>
      <source>The installation of %1 did not complete successfully.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="149"/>
      <source>Setup Complete</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="150"/>
      <source>Installation Complete</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="151"/>
      <source>The setup of %1 is complete.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/Config.cpp" line="152"/>
      <source>The installation of %1 is complete.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="111"/>
      <source>Package Selection</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="113"/>
      <source>Please pick a product from the list. The selected product will be installed.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="242"/>
      <source>Packages</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="248"/>
      <source>Install option: &lt;strong&gt;%1&lt;/strong&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/Config.cpp" line="248"/>
      <source>None</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/summary/Config.cpp" line="94"/>
      <source>Summary</source>
      <translation>الخلاصة</translation>
    </message>
    <message>
      <location filename="../src/modules/summary/Config.cpp" line="98"/>
      <source>This is an overview of what will happen once you start the setup procedure.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/summary/Config.cpp" line="103"/>
      <source>This is an overview of what will happen once you start the install procedure.</source>
      <translation>هذه نظرة عامّة عمّا سيحصل ما إن تبدأ عمليّة التّثبيت.</translation>
    </message>
  </context>
  <context>
    <name>ContextualProcessJob</name>
    <message>
      <location filename="../src/modules/contextualprocess/ContextualProcessJob.cpp" line="115"/>
      <source>Contextual Processes Job</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>CreatePartitionDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="18"/>
      <source>Create a Partition</source>
      <translation>أنشئ قسمًا</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="42"/>
      <source>Si&amp;ze:</source>
      <translation>الح&amp;جم:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="52"/>
      <source> MiB</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="59"/>
      <source>Partition &amp;Type:</source>
      <translation>&amp;نوع القسم:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="71"/>
      <source>Primar&amp;y</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="81"/>
      <source>E&amp;xtended</source>
      <translation>ممت&amp;دّ</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="123"/>
      <source>Fi&amp;le System:</source>
      <translation>نظام المل&amp;فّات:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="155"/>
      <source>LVM LV name</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="165"/>
      <source>&amp;Mount Point:</source>
      <translation>نقطة ال&amp;ضّمّ:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="191"/>
      <source>Flags:</source>
      <translation>الشّارات:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="224"/>
      <source>Label for the filesystem</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="234"/>
      <source>FS Label:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="67"/>
      <source>En&amp;crypt</source>
      <translation>تشفير</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="195"/>
      <source>Logical</source>
      <translation>منطقيّ</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="200"/>
      <source>Primary</source>
      <translation>أساسيّ</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="219"/>
      <source>GPT</source>
      <translation>GPT</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="91"/>
      <source>Mountpoint already in use. Please select another one.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="96"/>
      <source>Mountpoint must start with a &lt;tt&gt;/&lt;/tt&gt;.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>CreatePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="181"/>
      <source>Create new %1MiB partition on %3 (%2) with entries %4.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="189"/>
      <source>Create new %1MiB partition on %3 (%2).</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="196"/>
      <source>Create new %2MiB partition on %4 (%3) with file system %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="212"/>
      <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2) with entries &lt;em&gt;%4&lt;/em&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="221"/>
      <source>Create new &lt;strong&gt;%1MiB&lt;/strong&gt; partition on &lt;strong&gt;%3&lt;/strong&gt; (%2).</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="228"/>
      <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="252"/>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="255"/>
      <source>Creating new %1 partition on %2.</source>
      <translation>ينشئ قسم %1 جديد على %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="272"/>
      <source>The installer failed to create partition on disk '%1'.</source>
      <translation>فشل المثبّت في إنشاء قسم على القرص '%1'.</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionTableDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="24"/>
      <source>Create Partition Table</source>
      <translation>أنشئ جدول تقسيم</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="43"/>
      <source>Creating a new partition table will delete all existing data on the disk.</source>
      <translation>إنشاء جدول تقسيم جددي سيحذف كلّ البيانات على القرص.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="69"/>
      <source>What kind of partition table do you want to create?</source>
      <translation>ما نوع جدول التّقسيم الذي تريد إنشاءه؟</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="76"/>
      <source>Master Boot Record (MBR)</source>
      <translation>قطاع إقلاع رئيس (MBR)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="86"/>
      <source>GUID Partition Table (GPT)</source>
      <translation>جدول أقسام GUID ‏(GPT)</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionTableJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="41"/>
      <source>Create new %1 partition table on %2.</source>
      <translation>أنشئ جدول تقسيم %1 جديد على %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="49"/>
      <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
      <translation>أنشئ جدول تقسيم &lt;strong&gt;%1&lt;/strong&gt; جديد على &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="58"/>
      <source>Creating new %1 partition table on %2.</source>
      <translation>ينشئ جدول التّقسيم %1 الجديد على %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="86"/>
      <source>The installer failed to create a partition table on %1.</source>
      <translation>فشل المثبّت في إنشاء جدول تقسيم على %1.</translation>
    </message>
  </context>
  <context>
    <name>CreateUserJob</name>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="33"/>
      <source>Create user %1</source>
      <translation>أنشئ المستخدم %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="39"/>
      <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>أنشئ المستخدم &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="120"/>
      <source>Preserving home directory</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="45"/>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="137"/>
      <source>Creating user %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="145"/>
      <source>Configuring user %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="153"/>
      <source>Setting file permissions</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>CreateVolumeGroupDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="28"/>
      <source>Create Volume Group</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>CreateVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="32"/>
      <source>Create new volume group named %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="38"/>
      <source>Create new volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="44"/>
      <source>Creating new volume group named %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="51"/>
      <source>The installer failed to create a volume group named '%1'.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="26"/>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="38"/>
      <source>Deactivate volume group named %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="32"/>
      <source>Deactivate volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="46"/>
      <source>The installer failed to deactivate a volume group named %1.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>DeletePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="73"/>
      <source>Delete partition %1.</source>
      <translation>احذف القسم %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="79"/>
      <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>احذف القسم &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="85"/>
      <source>Deleting partition %1.</source>
      <translation>يحذف القسم %1 .</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="99"/>
      <source>The installer failed to delete partition %1.</source>
      <translation>فشل المثبّت في حذف القسم %1.</translation>
    </message>
  </context>
  <context>
    <name>DeviceInfoWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="139"/>
      <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
      <translation>للجهاز جدول تقسيم &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="95"/>
      <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="104"/>
      <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
      <translation>&lt;strong&gt;تعذّر اكتشاف جدول تقسيم&lt;/strong&gt; على جهاز التّخزين المحدّد.&lt;br&gt;&lt;br&gt;إمّا أن لا جدول تقسيم في الجهاز، أو أنه معطوب أو نوعه مجهول.&lt;br&gt;يمكن لهذا المثبّت إنشاء جدول تقسيم جديد، آليًّا أ, عبر صفحة التّقسيم اليدويّ.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="89"/>
      <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
      <translation>&lt;br&gt;&lt;br&gt;هذا هو نوع جدول التّقسيم المستحسن للأنظمة الحديثة والتي تبدأ ببيئة إقلاع &lt;strong&gt;EFI&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="78"/>
      <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="147"/>
      <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
      <translation>نوع &lt;strong&gt;جدول التّقسيم&lt;/strong&gt; على جهاز التّخزين المحدّد.&lt;br&gt;&lt;br&gt;الطّريقة الوحيدة لتغيير النّوع هو بحذفه وإعادة إنشاء جدول التّقسيم من الصّفر، ممّا سيؤدّي إلى تدمير كلّ البيانات في جهاز التّخزين.&lt;br&gt;سيبقي هذا المثبّت جدول التّقسيم الحاليّ كما هو إلّا إن لم ترد ذلك.&lt;br&gt;إن لم تكن متأكّدًا، ف‍ GPT مستحسن للأنظمة الحديثة.</translation>
    </message>
  </context>
  <context>
    <name>DeviceModel</name>
    <message>
      <location filename="../src/modules/partition/core/DeviceModel.cpp" line="82"/>
      <source>%1 - %2 (%3)</source>
      <extracomment>device[name] - size[number] (device-node[name])</extracomment>
      <translation>%1 - %2 (%3)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/DeviceModel.cpp" line="93"/>
      <source>%1 - (%2)</source>
      <extracomment>device[name] - (device-node[name])</extracomment>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>DracutLuksCfgJob</name>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="117"/>
      <source>Write LUKS configuration for Dracut to %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="121"/>
      <source>Skip writing LUKS configuration for Dracut: "/" partition is not encrypted</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="138"/>
      <source>Failed to open %1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>DummyCppJob</name>
    <message>
      <location filename="../src/modules/dummycpp/DummyCppJob.cpp" line="35"/>
      <source>Dummy C++ Job</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>EditExistingPartitionDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="24"/>
      <source>Edit Existing Partition</source>
      <translation>حرّر قسمًا موجودًا</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="54"/>
      <source>Con&amp;tent:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="64"/>
      <source>&amp;Keep</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="74"/>
      <source>Format</source>
      <translation>هيّئ</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="93"/>
      <source>Warning: Formatting the partition will erase all existing data.</source>
      <translation>تحذير: تهيئة القسم ستمسح بياناته كلّها.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="103"/>
      <source>&amp;Mount Point:</source>
      <translation>نقطة ال&amp;ضّمّ:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="129"/>
      <source>Si&amp;ze:</source>
      <translation>الح&amp;جم:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="139"/>
      <source> MiB</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="146"/>
      <source>Fi&amp;le System:</source>
      <translation>نظام المل&amp;فّات:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="159"/>
      <source>Flags:</source>
      <translation>الشّارات:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="179"/>
      <source>Label for the filesystem</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="189"/>
      <source>FS Label:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="259"/>
      <source>Passphrase for existing partition</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="260"/>
      <source>Partition %1 could not be decrypted with the given passphrase.&lt;br/&gt;&lt;br/&gt;Edit the partition again and give the correct passphrase or delete and create a new encrypted partition.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>EncryptWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="36"/>
      <source>En&amp;crypt system</source>
      <translation>ع&amp;مِّ النّظام</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="43"/>
      <source>Your system does not seem to support encryption well enough to encrypt the entire system. You may enable encryption, but performance may suffer.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="59"/>
      <source>Passphrase</source>
      <translation>عبارة المرور</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="69"/>
      <source>Confirm passphrase</source>
      <translation>أكّد عبارة المرور</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="153"/>
      <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="168"/>
      <source>Please enter the same passphrase in both boxes.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="158"/>
      <source>Password must be a minimum of %1 characters</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ErrorDialog</name>
    <message>
      <location filename="../src/libcalamaresui/widgets/ErrorDialog.ui" line="40"/>
      <source>Details:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/widgets/ErrorDialog.ui" line="56"/>
      <source>Would you like to paste the install log to the web?</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>FillGlobalStorageJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="179"/>
      <source>Set partition information</source>
      <translation>اضبط معلومات القسم</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="208"/>
      <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition with features &lt;em&gt;%3&lt;/em&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="216"/>
      <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
      <translation>ثبّت %1 على قسم نظام %2 &lt;strong&gt;جديد&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="225"/>
      <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt; and features &lt;em&gt;%3&lt;/em&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="233"/>
      <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;%3.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="247"/>
      <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt; with features &lt;em&gt;%4&lt;/em&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="266"/>
      <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt; and features &lt;em&gt;%4&lt;/em&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="275"/>
      <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;%4.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="256"/>
      <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>ثبّت %2 على قسم النّظام %3 ‏&lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="290"/>
      <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>ثبّت محمّل الإقلاع على &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="299"/>
      <source>Setting up mount points.</source>
      <translation>يضبط نقاط الضّمّ.</translation>
    </message>
  </context>
  <context>
    <name>FinishedPage</name>
    <message>
      <location filename="../src/modules/finished/FinishedPage.ui" line="102"/>
      <source>&amp;Restart now</source>
      <translation>أ&amp;عد التّشغيل الآن</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="75"/>
      <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="79"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style="font-style:italic;"&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="87"/>
      <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
      <translation>&lt;h1&gt;انتهينا.&lt;/h1&gt;&lt;br/&gt;لقد ثُبّت %1 على حاسوبك.&lt;br/&gt;يمكنك إعادة التّشغيل وفتح النّظام الجديد، أو متابعة استخدام بيئة %2 الحيّة.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="92"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style="font-style:italic;"&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="105"/>
      <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="113"/>
      <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>FinishedQmlViewStep</name>
    <message>
      <location filename="../src/modules/finishedq/FinishedQmlViewStep.cpp" line="35"/>
      <source>Finish</source>
      <translation>أنهِ</translation>
    </message>
  </context>
  <context>
    <name>FinishedViewStep</name>
    <message>
      <location filename="../src/modules/finished/FinishedViewStep.cpp" line="46"/>
      <source>Finish</source>
      <translation>أنهِ</translation>
    </message>
  </context>
  <context>
    <name>FormatPartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="39"/>
      <source>Format partition %1 (file system: %2, size: %3 MiB) on %4.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="49"/>
      <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="61"/>
      <source>%1 (%2)</source>
      <comment>partition label %1 (device path %2)</comment>
      <translation>%1 (%2)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="63"/>
      <source>Formatting partition %1 with file system %2.</source>
      <translation>يهيّء القسم %1 بنظام الملفّات %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="73"/>
      <source>The installer failed to format partition %1 on disk '%2'.</source>
      <translation>فشل المثبّت في تهيئة القسم %1 على القرص '%2'.</translation>
    </message>
  </context>
  <context>
    <name>GeneralRequirements</name>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="160"/>
      <source>Please ensure the system has at least %1 GiB available drive space.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="162"/>
      <source>Available drive space is all of the hard disks and SSDs connected to the system.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="165"/>
      <source>There is not enough drive space. At least %1 GiB is required.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="173"/>
      <source>has at least %1 GiB working memory</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="175"/>
      <source>The system does not have enough working memory. At least %1 GiB is required.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="184"/>
      <source>is plugged in to a power source</source>
      <translation>موصول بمصدر للطّاقة</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="185"/>
      <source>The system is not plugged in to a power source.</source>
      <translation>النّظام ليس متّصلًا بمصدر للطّاقة.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="192"/>
      <source>is connected to the Internet</source>
      <translation>موصول بالإنترنت</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="193"/>
      <source>The system is not connected to the Internet.</source>
      <translation>النّظام ليس موصولًا بالإنترنت</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="200"/>
      <source>is running the installer as an administrator (root)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="204"/>
      <source>The setup program is not running with administrator rights.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="205"/>
      <source>The installer is not running with administrator rights.</source>
      <translation>المثبّت لا يعمل بصلاحيّات المدير.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="213"/>
      <source>has a screen large enough to show the whole installer</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="217"/>
      <source>The screen is too small to display the setup program.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="218"/>
      <source>The screen is too small to display the installer.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="227"/>
      <source>is always false</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="228"/>
      <source>The computer says no.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="236"/>
      <source>is always false (slowly)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="237"/>
      <source>The computer says no (slowly).</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="244"/>
      <source>is always true</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="245"/>
      <source>The computer says yes.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="253"/>
      <source>is always true (slowly)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="254"/>
      <source>The computer says yes (slowly).</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="262"/>
      <source>is checked three times.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="265"/>
      <source>The snark has not been checked three times.</source>
      <comment>The (some mythological beast) has not been checked three times.</comment>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>HostInfoJob</name>
    <message>
      <location filename="../src/modules/hostinfo/HostInfoJob.cpp" line="41"/>
      <source>Collecting information about your machine.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>IDJob</name>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="30"/>
      <location filename="../src/modules/oemid/IDJob.cpp" line="39"/>
      <location filename="../src/modules/oemid/IDJob.cpp" line="52"/>
      <location filename="../src/modules/oemid/IDJob.cpp" line="59"/>
      <source>OEM Batch Identifier</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="40"/>
      <source>Could not create directories &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="53"/>
      <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
      <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>InitcpioJob</name>
    <message>
      <location filename="../src/modules/initcpio/InitcpioJob.cpp" line="31"/>
      <source>Creating initramfs with mkinitcpio.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>InitramfsJob</name>
    <message>
      <location filename="../src/modules/initramfs/InitramfsJob.cpp" line="27"/>
      <source>Creating initramfs.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>InteractiveTerminalPage</name>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="49"/>
      <source>Konsole not installed</source>
      <translation>كونسول غير مثبّت</translation>
    </message>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="50"/>
      <source>Please install KDE Konsole and try again!</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="122"/>
      <source>Executing script: &amp;nbsp;&lt;code&gt;%1&lt;/code&gt;</source>
      <translation>ينفّذ السّكربت: &amp;nbsp;&lt;code&gt;%1&lt;/code&gt;</translation>
    </message>
  </context>
  <context>
    <name>InteractiveTerminalViewStep</name>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalViewStep.cpp" line="40"/>
      <source>Script</source>
      <translation>سكربت</translation>
    </message>
  </context>
  <context>
    <name>KeyboardQmlViewStep</name>
    <message>
      <location filename="../src/modules/keyboardq/KeyboardQmlViewStep.cpp" line="32"/>
      <source>Keyboard</source>
      <translation>لوحة المفاتيح</translation>
    </message>
  </context>
  <context>
    <name>KeyboardViewStep</name>
    <message>
      <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="41"/>
      <source>Keyboard</source>
      <translation>لوحة المفاتيح</translation>
    </message>
  </context>
  <context>
    <name>LCLocaleDialog</name>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="23"/>
      <source>System locale setting</source>
      <translation>إعداد محليّة النّظام</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="30"/>
      <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>إعداد محليّة النّظام يؤثّر على لغة بعض عناصر واجهة مستخدم سطر الأوامر وأطقم محارفها.&lt;br/&gt;الإعداد الحاليّ هو &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="54"/>
      <source>&amp;Cancel</source>
      <translation>&amp;إلغاء</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="55"/>
      <source>&amp;OK</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>LOSHJob</name>
    <message>
      <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="35"/>
      <source>Configuring encrypted swap.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="87"/>
      <source>No target system available.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="95"/>
      <source>No rootMountPoint is set.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/luksopenswaphookcfg/LOSHJob.cpp" line="100"/>
      <source>No configFilePath is set.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>LicensePage</name>
    <message>
      <location filename="../src/modules/license/LicensePage.ui" line="26"/>
      <source>&lt;h1&gt;License Agreement&lt;/h1&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="142"/>
      <source>I accept the terms and conditions above.</source>
      <translation>أقبل الشّروط والأحكام أعلاه.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="144"/>
      <source>Please review the End User License Agreements (EULAs).</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="149"/>
      <source>This setup procedure will install proprietary software that is subject to licensing terms.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="152"/>
      <source>If you do not agree with the terms, the setup procedure cannot continue.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="157"/>
      <source>This setup procedure can install proprietary software that is subject to licensing terms in order to provide additional features and enhance the user experience.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="162"/>
      <source>If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>LicenseViewStep</name>
    <message>
      <location filename="../src/modules/license/LicenseViewStep.cpp" line="45"/>
      <source>License</source>
      <translation>الرّخصة</translation>
    </message>
  </context>
  <context>
    <name>LicenseWidget</name>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="88"/>
      <source>URL: %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="109"/>
      <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
      <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
      <translation>&lt;strong&gt;مشغّل %1&lt;/strong&gt;&lt;br/&gt;من%2</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="116"/>
      <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
      <translation>&lt;strong&gt;مشغّل %1 للرّسوميّات&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;من %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="122"/>
      <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <translation>&lt;strong&gt;ملحقة %1 للمتصّفح&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;من %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="128"/>
      <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <translation>&lt;strong&gt;مرماز %1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;من %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="134"/>
      <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <translation>&lt;strong&gt;حزمة %1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;من %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="140"/>
      <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;من %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="163"/>
      <source>File: %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
      <source>Hide license text</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="186"/>
      <source>Show the license text</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="190"/>
      <source>Open license agreement in browser.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>LocalePage</name>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="130"/>
      <source>Region:</source>
      <translation>المنطقة:</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="131"/>
      <source>Zone:</source>
      <translation>المجال:</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="132"/>
      <location filename="../src/modules/locale/LocalePage.cpp" line="133"/>
      <source>&amp;Change...</source>
      <translation>&amp;غيّر...</translation>
    </message>
  </context>
  <context>
    <name>LocaleQmlViewStep</name>
    <message>
      <location filename="../src/modules/localeq/LocaleQmlViewStep.cpp" line="32"/>
      <source>Location</source>
      <translation>الموقع</translation>
    </message>
  </context>
  <context>
    <name>LocaleTests</name>
    <message>
      <location filename="../src/libcalamares/locale/Tests.cpp" line="271"/>
      <source>Quit</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>LocaleViewStep</name>
    <message>
      <location filename="../src/modules/locale/LocaleViewStep.cpp" line="71"/>
      <source>Location</source>
      <translation>الموقع</translation>
    </message>
  </context>
  <context>
    <name>LuksBootKeyFileJob</name>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="33"/>
      <source>Configuring LUKS key file.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="254"/>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="262"/>
      <source>No partitions are defined.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="297"/>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="304"/>
      <source>Encrypted rootfs setup error</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="298"/>
      <source>Root partition %1 is LUKS but no passphrase has been set.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="305"/>
      <source>Could not create LUKS key file for root partition %1.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>MachineIdJob</name>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="35"/>
      <source>Generate machine-id.</source>
      <translation>توليد معرف الجهاز</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="51"/>
      <source>Configuration Error</source>
      <translation>خطأ في الضبط</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="52"/>
      <source>No root mount point is set for MachineId.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>Map</name>
    <message>
      <location filename="../src/modules/localeq/Map.qml" line="237"/>
      <source>Timezone: %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/Map.qml" line="258"/>
      <source>Please select your preferred location on the map so the installer can suggest the locale
            and timezone settings for you. You can fine-tune the suggested settings below. Search the map by dragging
            to move and using the +/- buttons to zoom in/out or use mouse scrolling for zooming.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>NetInstallViewStep</name>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="50"/>
      <source>Package selection</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="51"/>
      <source>Office software</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="52"/>
      <source>Office package</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="53"/>
      <source>Browser software</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="54"/>
      <source>Browser package</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="55"/>
      <source>Web browser</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="56"/>
      <source>Kernel</source>
      <comment>label for netinstall module, Linux kernel</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="57"/>
      <source>Services</source>
      <comment>label for netinstall module, system services</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="58"/>
      <source>Login</source>
      <comment>label for netinstall module, choose login manager</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="59"/>
      <source>Desktop</source>
      <comment>label for netinstall module, choose desktop environment</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="61"/>
      <source>Communication</source>
      <comment>label for netinstall module</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="62"/>
      <source>Development</source>
      <comment>label for netinstall module</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="63"/>
      <source>Office</source>
      <comment>label for netinstall module</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="64"/>
      <source>Multimedia</source>
      <comment>label for netinstall module</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="65"/>
      <source>Internet</source>
      <comment>label for netinstall module</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="66"/>
      <source>Theming</source>
      <comment>label for netinstall module</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="67"/>
      <source>Gaming</source>
      <comment>label for netinstall module</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="68"/>
      <source>Utilities</source>
      <comment>label for netinstall module</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="60"/>
      <source>Applications</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>NotesQmlViewStep</name>
    <message>
      <location filename="../src/modules/notesqml/NotesQmlViewStep.cpp" line="23"/>
      <source>Notes</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>OEMPage</name>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="32"/>
      <source>Ba&amp;tch:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="42"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="52"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>OEMViewStep</name>
    <message>
      <location filename="../src/modules/oemid/OEMViewStep.cpp" line="118"/>
      <source>OEM Configuration</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMViewStep.cpp" line="124"/>
      <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>Offline</name>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="47"/>
      <source>Select your preferred Region, or use the default settings.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="103"/>
      <location filename="../src/modules/localeq/Offline.qml" line="180"/>
      <location filename="../src/modules/localeq/Offline.qml" line="224"/>
      <source>Timezone: %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="120"/>
      <source>Select your preferred Zone within your Region.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="193"/>
      <source>Zones</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="240"/>
      <source>You can fine-tune Language and Locale settings below.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>PWQ</name>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="52"/>
      <source>Password is too short</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="68"/>
      <source>Password is too long</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="189"/>
      <source>Password is too weak</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="197"/>
      <source>Memory allocation error when setting '%1'</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="200"/>
      <source>Memory allocation error</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="202"/>
      <source>The password is the same as the old one</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="204"/>
      <source>The password is a palindrome</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="206"/>
      <source>The password differs with case changes only</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="208"/>
      <source>The password is too similar to the old one</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="210"/>
      <source>The password contains the user name in some form</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="212"/>
      <source>The password contains words from the real name of the user in some form</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="215"/>
      <source>The password contains forbidden words in some form</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="222"/>
      <source>The password contains too few digits</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="229"/>
      <source>The password contains too few uppercase letters</source>
      <translation type="unfinished"/>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="233"/>
      <source>The password contains fewer than %n lowercase letters</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="236"/>
      <source>The password contains too few lowercase letters</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="243"/>
      <source>The password contains too few non-alphanumeric characters</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="250"/>
      <source>The password is too short</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="259"/>
      <source>The password does not contain enough character classes</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="266"/>
      <source>The password contains too many same characters consecutively</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="276"/>
      <source>The password contains too many characters of the same class consecutively</source>
      <translation type="unfinished"/>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="219"/>
      <source>The password contains fewer than %n digits</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="226"/>
      <source>The password contains fewer than %n uppercase letters</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="240"/>
      <source>The password contains fewer than %n non-alphanumeric characters</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="247"/>
      <source>The password is shorter than %n characters</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="252"/>
      <source>The password is a rotated version of the previous one</source>
      <translation type="unfinished"/>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="256"/>
      <source>The password contains fewer than %n character classes</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="263"/>
      <source>The password contains more than %n same characters consecutively</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="270"/>
      <source>The password contains more than %n characters of the same class consecutively</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="281"/>
      <source>The password contains monotonic sequence longer than %n characters</source>
      <translation type="unfinished">
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
        <numerusform/>
      </translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="287"/>
      <source>The password contains too long of a monotonic character sequence</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="290"/>
      <source>No password supplied</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="292"/>
      <source>Cannot obtain random numbers from the RNG device</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="294"/>
      <source>Password generation failed - required entropy too low for settings</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="299"/>
      <source>The password fails the dictionary check - %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="302"/>
      <source>The password fails the dictionary check</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="306"/>
      <source>Unknown setting - %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="308"/>
      <source>Unknown setting</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="312"/>
      <source>Bad integer value of setting - %1</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="314"/>
      <source>Bad integer value</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="318"/>
      <source>Setting %1 is not of integer type</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="320"/>
      <source>Setting is not of integer type</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="324"/>
      <source>Setting %1 is not of string type</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="326"/>
      <source>Setting is not of string type</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="328"/>
      <source>Opening the configuration file failed</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="330"/>
      <source>The configuration file is malformed</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="332"/>
      <source>Fatal failure</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="334"/>
      <source>Unknown error</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="840"/>
      <source>Password is empty</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>PackageChooserPage</name>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="50"/>
      <source>Product Name</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="63"/>
      <source>TextLabel</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="79"/>
      <source>Long Product Description</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="25"/>
      <source>Package Selection</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="26"/>
      <source>Please pick a product from the list. The selected product will be installed.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>PackageModel</name>
    <message>
      <location filename="../src/modules/netinstall/PackageModel.cpp" line="206"/>
      <source>Name</source>
      <translation>الاسم</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/PackageModel.cpp" line="206"/>
      <source>Description</source>
      <translation>الوصف</translation>
    </message>
  </context>
  <context>
    <name>Page_Keyboard</name>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="74"/>
      <source>Keyboard Model:</source>
      <translation>طراز لوحة المفاتيح:</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="146"/>
      <source>Type here to test your keyboard</source>
      <translation>اكتب هنا لتجرّب لوحة المفاتيح</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="153"/>
      <source>Keyboard Switch:</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>Page_UserSetup</name>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="40"/>
      <source>What is your name?</source>
      <translation>ما اسمك؟</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="55"/>
      <source>Your Full Name</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="124"/>
      <source>What name do you want to use to log in?</source>
      <translation>ما الاسم الذي تريده لتلج به؟</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="148"/>
      <source>login</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="223"/>
      <source>What is the name of this computer?</source>
      <translation>ما اسم هذا الحاسوب؟</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="247"/>
      <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
      <translation>&lt;small&gt;سيُستخدم الاسم لإظهار الحاسوب للآخرين عبر الشّبكة.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="250"/>
      <source>Computer Name</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="325"/>
      <source>Choose a password to keep your account safe.</source>
      <translation>اختر كلمة مرور لإبقاء حسابك آمنًا.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="349"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="374"/>
      <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
      <translation>&lt;small&gt;أدخل ذات كلمة المرور مرّتين، للتأكّد من عدم وجود أخطاء طباعيّة. تتكوّن كلمة المرور الجيّدة من خليط أحرف وأرقام وعلامات ترقيم، وطول لا يقلّ عن 8 محارف. كذلك يحبّذ تغييرها دوريًّا لزيادة الأمان.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="355"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="525"/>
      <source>Password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="380"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="550"/>
      <source>Repeat Password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="455"/>
      <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="458"/>
      <source>Require strong passwords.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="465"/>
      <source>Log in automatically without asking for the password.</source>
      <translation>لِج آليًّا بدون طلب كلمة مرور.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="472"/>
      <source>Use the same password for the administrator account.</source>
      <translation>استخدم نفس كلمة المرور لحساب المدير.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="495"/>
      <source>Choose a password for the administrator account.</source>
      <translation>اختر كلمة مرور لحساب المدير.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="519"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="544"/>
      <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
      <translation>&lt;small&gt;أدخل ذات كلمة المرور مرّتين، للتّأكد من عدم وجود أخطاء طباعيّة.&lt;/small&gt;</translation>
    </message>
  </context>
  <context>
    <name>PartitionLabelsView</name>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="178"/>
      <source>Root</source>
      <translation>الجذر</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="182"/>
      <source>Home</source>
      <translation>المنزل</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="186"/>
      <source>Boot</source>
      <translation>الإقلاع</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="191"/>
      <source>EFI system</source>
      <translation>نظام EFI</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="195"/>
      <source>Swap</source>
      <translation>التّبديل</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="199"/>
      <source>New partition for %1</source>
      <translation>قسم جديد ل‍ %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="203"/>
      <source>New partition</source>
      <translation>قسم جديد</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="227"/>
      <source>%1  %2</source>
      <extracomment>size[number] filesystem[name]</extracomment>
      <translation>%1 %2</translation>
    </message>
  </context>
  <context>
    <name>PartitionModel</name>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="157"/>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="201"/>
      <source>Free Space</source>
      <translation>المساحة الحرّة</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="161"/>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="205"/>
      <source>New partition</source>
      <translation>قسم جديد</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="298"/>
      <source>Name</source>
      <translation>الاسم</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="300"/>
      <source>File System</source>
      <translation>نظام الملفّات</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="302"/>
      <source>File System Label</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="304"/>
      <source>Mount Point</source>
      <translation>نقطة الضّمّ</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="306"/>
      <source>Size</source>
      <translation>الحجم</translation>
    </message>
  </context>
  <context>
    <name>PartitionPage</name>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="26"/>
      <source>Storage de&amp;vice:</source>
      <translation>ج&amp;هاز التّخزين:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="55"/>
      <source>&amp;Revert All Changes</source>
      <translation>ا&amp;عكس كلّ التّغييرات</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="91"/>
      <source>New Partition &amp;Table</source>
      <translation>&amp;جدول تقسيم جديد</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="111"/>
      <source>Cre&amp;ate</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="118"/>
      <source>&amp;Edit</source>
      <translation>ح&amp;رّر</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="125"/>
      <source>&amp;Delete</source>
      <translation>ا&amp;حذف</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="136"/>
      <source>New Volume Group</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="143"/>
      <source>Resize Volume Group</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="150"/>
      <source>Deactivate Volume Group</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="157"/>
      <source>Remove Volume Group</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="184"/>
      <source>I&amp;nstall boot loader on:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="224"/>
      <source>Are you sure you want to create a new partition table on %1?</source>
      <translation>أمتأكّد من إنشاء جدول تقسيم جديد على %1؟</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="259"/>
      <source>Can not create new partition</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="260"/>
      <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>PartitionViewStep</name>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="56"/>
      <source>Gathering system information...</source>
      <translation>جاري جمع معلومات عن النظام...</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="107"/>
      <source>Partitions</source>
      <translation>الأقسام</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="250"/>
      <source>Unsafe partition actions are enabled.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="253"/>
      <source>Partitioning is configured to &lt;b&gt;always&lt;/b&gt; fail.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="256"/>
      <source>No partitions will be changed.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="296"/>
      <source>Current:</source>
      <translation>الحاليّ:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="314"/>
      <source>After:</source>
      <translation>بعد:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="535"/>
      <source>No EFI system partition configured</source>
      <translation>لم يُضبط أيّ قسم نظام EFI</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="539"/>
      <source>EFI system partition configured incorrectly</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="544"/>
      <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a suitable filesystem.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="555"/>
      <source>The filesystem must be mounted on &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="561"/>
      <source>The filesystem must have type FAT32.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="569"/>
      <source>The filesystem must be at least %1 MiB in size.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="575"/>
      <source>The filesystem must have flag &lt;strong&gt;%1&lt;/strong&gt; set.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="581"/>
      <source>You can continue without setting up an EFI system partition but your system may fail to start.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="599"/>
      <source>Option to use GPT on BIOS</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="600"/>
      <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partition table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;%2&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="622"/>
      <source>Boot partition not encrypted</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="623"/>
      <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="715"/>
      <source>has at least one disk device available.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/PartitionViewStep.cpp" line="716"/>
      <source>There are no partitions to install on.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>PlasmaLnfJob</name>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="33"/>
      <source>Plasma Look-and-Feel Job</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="57"/>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="58"/>
      <source>Could not select KDE Plasma Look-and-Feel package</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>PlasmaLnfPage</name>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="79"/>
      <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is set up. Clicking on a look-and-feel selection will give you a live preview of that look-and-feel.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="84"/>
      <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is installed. Clicking on a look-and-feel selection will give you a live preview of that look-and-feel.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>PlasmaLnfViewStep</name>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfViewStep.cpp" line="43"/>
      <source>Look-and-Feel</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>PreserveFiles</name>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="56"/>
      <source>Saving files for later ...</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="64"/>
      <source>No files configured to save for later.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="88"/>
      <source>Not all of the configured files could be preserved.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ProcessResult</name>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="303"/>
      <source>
There was no output from the command.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="304"/>
      <source>
Output:
</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="308"/>
      <source>External command crashed.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="309"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="314"/>
      <source>External command failed to start.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="315"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="319"/>
      <source>Internal error when starting command.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="320"/>
      <source>Bad parameters for process job call.</source>
      <translation>معاملات نداء المهمة سيّئة.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="324"/>
      <source>External command failed to finish.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="325"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="332"/>
      <source>External command finished with errors.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/System.cpp" line="333"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../src/libcalamares/locale/Translation.cpp" line="155"/>
      <source>%1 (%2)</source>
      <translation>%1 (%2)</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="33"/>
      <source>unknown</source>
      <translation>مجهول</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="35"/>
      <source>extended</source>
      <translation>ممتدّ</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="37"/>
      <source>unformatted</source>
      <translation>غير مهيّأ</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="39"/>
      <source>swap</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="145"/>
      <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="192"/>
      <source>Default</source>
      <translation>الافتراضي</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/Workers.cpp" line="64"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="72"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="76"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="93"/>
      <source>File not found</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/machineid/Workers.cpp" line="65"/>
      <source>Path &lt;pre&gt;%1&lt;/pre&gt; must be an absolute path.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="81"/>
      <source>Directory not found</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="82"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="94"/>
      <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageModel.cpp" line="74"/>
      <source>No product</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageModel.cpp" line="82"/>
      <source>No description provided.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="44"/>
      <source>(no mount point)</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="39"/>
      <source>Unpartitioned space or unknown partition table</source>
      <translation>مساحة غير مقسّمة أو جدول تقسيم مجهول</translation>
    </message>
  </context>
  <context>
    <name>Recommended</name>
    <message>
      <location filename="../src/modules/welcomeq/Recommended.qml" line="40"/>
      <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>RemoveUserJob</name>
    <message>
      <location filename="../src/modules/removeuser/RemoveUserJob.cpp" line="32"/>
      <source>Remove live user from target system</source>
      <translation>إزالة المستخدم المباشر من النظام الهدف</translation>
    </message>
  </context>
  <context>
    <name>RemoveVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="26"/>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="38"/>
      <source>Remove Volume Group named %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="32"/>
      <source>Remove Volume Group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="46"/>
      <source>The installer failed to remove a volume group named '%1'.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>Requirements</name>
    <message>
      <location filename="../src/modules/welcomeq/Requirements.qml" line="37"/>
      <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/Requirements.qml" line="39"/>
      <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ResizeFSJob</name>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="43"/>
      <source>Resize Filesystem Job</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="161"/>
      <source>Invalid configuration</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="162"/>
      <source>The file-system resize job has an invalid configuration and will not run.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="167"/>
      <source>KPMCore not Available</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="168"/>
      <source>Calamares cannot start KPMCore for the file-system resize job.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="176"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="185"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="196"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="205"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="223"/>
      <source>Resize Failed</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="178"/>
      <source>The filesystem %1 could not be found in this system, and cannot be resized.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="179"/>
      <source>The device %1 could not be found in this system, and cannot be resized.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="187"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="198"/>
      <source>The filesystem %1 cannot be resized.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="188"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="199"/>
      <source>The device %1 cannot be resized.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="206"/>
      <source>The filesystem %1 must be resized, but cannot.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="207"/>
      <source>The device %1 must be resized, but cannot</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ResizePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="41"/>
      <source>Resize partition %1.</source>
      <translation>غيّر حجم القسم %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="47"/>
      <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="57"/>
      <source>Resizing %2MiB partition %1 to %3MiB.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="74"/>
      <source>The installer failed to resize partition %1 on disk '%2'.</source>
      <translation>فشل المثبّت في تغيير حجم القسم %1 على القرص '%2'.</translation>
    </message>
  </context>
  <context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="30"/>
      <source>Resize Volume Group</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ResizeVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="28"/>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="46"/>
      <source>Resize volume group named %1 from %2 to %3.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="37"/>
      <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="57"/>
      <source>The installer failed to resize a volume group named '%1'.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ResultsListWidget</name>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="47"/>
      <source>Checking requirements again in a few seconds ...</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>ScanningDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="68"/>
      <source>Scanning storage devices...</source>
      <translation>يفحص أجهزة التّخزين...</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="68"/>
      <source>Partitioning</source>
      <translation>يقسّم</translation>
    </message>
  </context>
  <context>
    <name>SetHostNameJob</name>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="36"/>
      <source>Set hostname %1</source>
      <translation>اضبط اسم المضيف %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="42"/>
      <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>اضبط اسم المضيف &lt;strong&gt;%1&lt;/strong&gt; .</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="48"/>
      <source>Setting hostname %1.</source>
      <translation>يضبط اسم المضيف 1%.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="121"/>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="128"/>
      <source>Internal Error</source>
      <translation>خطأ داخلي</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="139"/>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="156"/>
      <source>Cannot write hostname to target system</source>
      <translation>تعذّرت كتابة اسم المضيف إلى النّظام الهدف</translation>
    </message>
  </context>
  <context>
    <name>SetKeyboardLayoutJob</name>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="66"/>
      <source>Set keyboard model to %1, layout to %2-%3</source>
      <translation>اضبك طراز لوحة المفتايح إلى %1، والتّخطيط إلى %2-%3</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="366"/>
      <source>Failed to write keyboard configuration for the virtual console.</source>
      <translation>فشلت كتابة ضبط لوحة المفاتيح للطرفيّة الوهميّة.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="367"/>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="393"/>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="410"/>
      <source>Failed to write to %1</source>
      <translation>فشلت الكتابة إلى %1</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="392"/>
      <source>Failed to write keyboard configuration for X11.</source>
      <translation>فشلت كتابة ضبط لوحة المفاتيح ل‍ X11.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="409"/>
      <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>SetPartFlagsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="44"/>
      <source>Set flags on partition %1.</source>
      <translation>اضبط رايات القسم %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="50"/>
      <source>Set flags on %1MiB %2 partition.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="54"/>
      <source>Set flags on new partition.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="65"/>
      <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>يمحي رايات القسم &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
      <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="75"/>
      <source>Clear flags on new partition.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="80"/>
      <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="89"/>
      <source>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="96"/>
      <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="107"/>
      <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>يمحي رايات القسم &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="113"/>
      <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="118"/>
      <source>Clearing flags on new partition.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="123"/>
      <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>يضبط رايات &lt;strong&gt;%2&lt;/strong&gt; القسم&lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="132"/>
      <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="139"/>
      <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="152"/>
      <source>The installer failed to set flags on partition %1.</source>
      <translation>فشل المثبّت في ضبط رايات القسم %1.</translation>
    </message>
  </context>
  <context>
    <name>SetPasswordJob</name>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="38"/>
      <source>Set password for user %1</source>
      <translation>اضبط كلمة مرور للمستخدم %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="44"/>
      <source>Setting password for user %1.</source>
      <translation>يضبط كلمة مرور للمستخدم %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="77"/>
      <source>Bad destination system path.</source>
      <translation>مسار النّظام المقصد سيّء.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="78"/>
      <source>rootMountPoint is %1</source>
      <translation>rootMountPoint هو %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="84"/>
      <source>Cannot disable root account.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="93"/>
      <source>Cannot set password for user %1.</source>
      <translation>تعذّر ضبط كلمة مرور للمستخدم %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="85"/>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="94"/>
      <source>usermod terminated with error code %1.</source>
      <translation>أُنهي usermod برمز الخطأ %1.</translation>
    </message>
  </context>
  <context>
    <name>SetTimezoneJob</name>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="32"/>
      <source>Set timezone to %1/%2</source>
      <translation>اضبط المنطقة الزّمنيّة إلى %1/%2</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="59"/>
      <source>Cannot access selected timezone path.</source>
      <translation>لا يمكن الدخول إلى مسار المنطقة الزمنية المختارة.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="60"/>
      <source>Bad path: %1</source>
      <translation>المسار سيّء: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="68"/>
      <source>Cannot set timezone.</source>
      <translation>لا يمكن تعيين المنطقة الزمنية.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="69"/>
      <source>Link creation failed, target: %1; link name: %2</source>
      <translation>فشل إنشاء الوصلة، الهدف: %1، اسم الوصلة: %2</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="74"/>
      <source>Cannot set timezone,</source>
      <translation>تعذّر ضبط المنطقة الزّمنيّة،</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="75"/>
      <source>Cannot open /etc/timezone for writing</source>
      <translation>تعذّر فتح ‎/etc/timezone للكتابة</translation>
    </message>
  </context>
  <context>
    <name>SetupGroupsJob</name>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="181"/>
      <source>Preparing groups.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="193"/>
      <location filename="../src/modules/users/MiscJobs.cpp" line="198"/>
      <source>Could not create groups in target system</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="199"/>
      <source>These groups are missing in the target system: %1</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>SetupSudoJob</name>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="34"/>
      <source>Configure &lt;pre&gt;sudo&lt;/pre&gt; users.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="70"/>
      <source>Cannot chmod sudoers file.</source>
      <translation>تعذّر تغيير صلاحيّات ملفّ sudores.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/MiscJobs.cpp" line="75"/>
      <source>Cannot create sudoers file for writing.</source>
      <translation>تعذّر إنشاء ملفّ sudoers للكتابة.</translation>
    </message>
  </context>
  <context>
    <name>ShellProcessJob</name>
    <message>
      <location filename="../src/modules/shellprocess/ShellProcessJob.cpp" line="38"/>
      <source>Shell Processes Job</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>SlideCounter</name>
    <message>
      <location filename="../src/qml/calamares/slideshow/SlideCounter.qml" line="27"/>
      <source>%L1 / %L2</source>
      <extracomment>slide counter, %1 of %2 (numeric)</extracomment>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>StandardButtons</name>
    <message>
      <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="23"/>
      <source>&amp;OK</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="24"/>
      <source>&amp;Yes</source>
      <translation>&amp;نعم</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="25"/>
      <source>&amp;No</source>
      <translation>&amp;لا</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="26"/>
      <source>&amp;Cancel</source>
      <translation>&amp;إلغاء</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/widgets/TranslationFix.cpp" line="27"/>
      <source>&amp;Close</source>
      <translation>&amp;اغلاق</translation>
    </message>
  </context>
  <context>
    <name>TrackingInstallJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="100"/>
      <source>Installation feedback</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="106"/>
      <source>Sending installation feedback.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="124"/>
      <source>Internal error in install-tracking.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="125"/>
      <source>HTTP request timed out.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>TrackingKUserFeedbackJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="192"/>
      <source>KDE user feedback</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="198"/>
      <source>Configuring KDE user feedback.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="220"/>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="228"/>
      <source>Error in KDE user feedback configuration.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="221"/>
      <source>Could not configure KDE user feedback correctly, script error %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="229"/>
      <source>Could not configure KDE user feedback correctly, Calamares error %1.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>TrackingMachineUpdateManagerJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="135"/>
      <source>Machine feedback</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="141"/>
      <source>Configuring machine feedback.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="164"/>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="173"/>
      <source>Error in machine feedback configuration.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="166"/>
      <source>Could not configure machine feedback correctly, script error %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="175"/>
      <source>Could not configure machine feedback correctly, Calamares error %1.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>TrackingPage</name>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="28"/>
      <source>Placeholder</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="76"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Click here to send &lt;span style=" font-weight:600;"&gt;no information at all&lt;/span&gt; about your installation.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="275"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;a href="placeholder"&gt;&lt;span style=" text-decoration: underline; color:#2980b9;"&gt;Click here for more information about user feedback&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="95"/>
      <source>Tracking helps %1 to see how often it is installed, what hardware it is installed on and which applications are used. To see what will be sent, please click the help icon next to each area.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="100"/>
      <source>By selecting this you will send information about your installation and hardware. This information will only be sent &lt;b&gt;once&lt;/b&gt; after the installation finishes.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="103"/>
      <source>By selecting this you will periodically send information about your &lt;b&gt;machine&lt;/b&gt; installation, hardware and applications, to %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="107"/>
      <source>By selecting this you will regularly send information about your &lt;b&gt;user&lt;/b&gt; installation, hardware, applications and application usage patterns, to %1.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>TrackingViewStep</name>
    <message>
      <location filename="../src/modules/tracking/TrackingViewStep.cpp" line="49"/>
      <source>Feedback</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>UmountJob</name>
    <message>
      <location filename="../src/modules/umount/UmountJob.cpp" line="39"/>
      <source>Unmount file systems.</source>
      <translation>الغاء تحميل ملف النظام</translation>
    </message>
    <message>
      <location filename="../src/modules/umount/UmountJob.cpp" line="123"/>
      <source>No target system available.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/umount/UmountJob.cpp" line="131"/>
      <source>No rootMountPoint is set.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>UsersPage</name>
    <message>
      <location filename="../src/modules/users/UsersPage.cpp" line="189"/>
      <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/UsersPage.cpp" line="195"/>
      <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>UsersQmlViewStep</name>
    <message>
      <location filename="../src/modules/usersq/UsersQmlViewStep.cpp" line="35"/>
      <source>Users</source>
      <translation>المستخدمين</translation>
    </message>
  </context>
  <context>
    <name>UsersViewStep</name>
    <message>
      <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
      <source>Users</source>
      <translation>المستخدمين</translation>
    </message>
  </context>
  <context>
    <name>VariantModel</name>
    <message>
      <location filename="../src/calamares/VariantModel.cpp" line="232"/>
      <source>Key</source>
      <comment>Column header for key/value</comment>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/VariantModel.cpp" line="236"/>
      <source>Value</source>
      <comment>Column header for key/value</comment>
      <translation>القيمة</translation>
    </message>
  </context>
  <context>
    <name>VolumeGroupBaseDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="18"/>
      <source>Create Volume Group</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="24"/>
      <source>List of Physical Volumes</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="34"/>
      <source>Volume Group Name:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="47"/>
      <source>Volume Group Type:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="60"/>
      <source>Physical Extent Size:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="70"/>
      <source> MiB</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="86"/>
      <source>Total Size:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="106"/>
      <source>Used Size:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="126"/>
      <source>Total Sectors:</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="146"/>
      <source>Quantity of LVs:</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>WelcomePage</name>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="79"/>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="98"/>
      <source>Select application and system language</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="140"/>
      <source>Open donations website</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="143"/>
      <source>&amp;Donate</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="153"/>
      <source>Open help and support website</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="156"/>
      <source>&amp;Support</source>
      <translation>&amp;الدعم</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="166"/>
      <source>Open issues and bug-tracking website</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="169"/>
      <source>&amp;Known issues</source>
      <translation>&amp;مشاكل معروفة</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="179"/>
      <source>Open release notes website</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="182"/>
      <source>&amp;Release notes</source>
      <translation>&amp;ملاحظات الإصدار</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="212"/>
      <source>%1 support</source>
      <translation>%1  الدعم</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.cpp" line="235"/>
      <source>About %1 setup</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.cpp" line="236"/>
      <source>About %1 installer</source>
      <translation>حول 1% المثبت</translation>
    </message>
  </context>
  <context>
    <name>WelcomeQmlViewStep</name>
    <message>
      <location filename="../src/modules/welcomeq/WelcomeQmlViewStep.cpp" line="40"/>
      <source>Welcome</source>
      <translation>مرحبا بك</translation>
    </message>
  </context>
  <context>
    <name>WelcomeViewStep</name>
    <message>
      <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="46"/>
      <source>Welcome</source>
      <translation>مرحبا بك</translation>
    </message>
  </context>
  <context>
    <name>ZfsJob</name>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="102"/>
      <source>Create ZFS pools and datasets</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="162"/>
      <source>Failed to create zpool on </source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="180"/>
      <source>Configuration Error</source>
      <translation>خطأ في الضبط</translation>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="181"/>
      <source>No partitions are available for ZFS.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="192"/>
      <source>Internal data missing</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="192"/>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="264"/>
      <source>Failed to create zpool</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="336"/>
      <source>Failed to create dataset</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/zfs/ZfsJob.cpp" line="337"/>
      <source>The output was: </source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>calamares-sidebar</name>
    <message>
      <location filename="../src/calamares/calamares-sidebar.qml" line="89"/>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="157"/>
      <source>About</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/calamares-sidebar.qml" line="115"/>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="172"/>
      <source>Debug</source>
      <translation>التدقيق</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="159"/>
      <source>Show information about Calamares</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="174"/>
      <source>Show debug information</source>
      <translation>أظهر معلومات التّنقيح</translation>
    </message>
  </context>
  <context>
    <name>finishedq</name>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="36"/>
      <source>Installation Completed</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="43"/>
      <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart into your new system, or continue using the Live environment.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="65"/>
      <source>Close Installer</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="71"/>
      <source>Restart System</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq.qml" line="89"/>
      <source>&lt;p&gt;A full log of the install is available as installation.log in the home directory of the Live user.&lt;br/&gt;
            This log is copied to /var/log/installation.log of the target system.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>finishedq@mobile</name>
    <message>
      <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="36"/>
      <source>Installation Completed</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="43"/>
      <source>%1 has been installed on your computer.&lt;br/&gt;
            You may now restart your device.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="65"/>
      <source>Close</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/finishedq/finishedq@mobile.qml" line="71"/>
      <source>Restart</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>keyboardq</name>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="61"/>
      <source>To activate keyboard preview, select a layout.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="144"/>
      <source>&lt;b&gt;Keyboard Model:&amp;nbsp;&amp;nbsp;&lt;/b&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="185"/>
      <source>Layout</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="258"/>
      <source>Variant</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="311"/>
      <source>Type here to test your keyboard</source>
      <translation>اكتب هنا لتجرّب لوحة المفاتيح</translation>
    </message>
  </context>
  <context>
    <name>localeq</name>
    <message>
      <location filename="../src/modules/localeq/localeq.qml" line="76"/>
      <location filename="../src/modules/localeq/localeq.qml" line="106"/>
      <source>Change</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/localeq.qml" line="142"/>
      <source>&lt;h3&gt;Languages&lt;/h3&gt; &lt;/br&gt;
                            The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/localeq.qml" line="213"/>
      <source>&lt;h3&gt;Locales&lt;/h3&gt; &lt;/br&gt;
                                The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>notesqml</name>
    <message>
      <location filename="../src/modules/notesqml/notesqml.qml" line="50"/>
      <source>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;These are example release notes.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>packagechooserq</name>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="45"/>
      <source>LibreOffice is a powerful and free office suite, used by millions of people around the world. It includes several applications that make it the most versatile Free and Open Source office suite on the market.&lt;br/&gt;
                    Default option.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="59"/>
      <source>LibreOffice</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="108"/>
      <source>If you don't want to install an office suite, just select No Office Suite. You can always add one (or more) later on your installed system as the need arrives.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="121"/>
      <source>No Office Suite</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="172"/>
      <source>Create a minimal Desktop install, remove all extra applications and decide later on what you would like to add to your system. Examples of what won't be on such an install, there will be no Office Suite, no media players, no image viewer or print support.  It will be just a desktop, file browser, package manager, text editor and simple web-browser.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="185"/>
      <source>Minimal Install</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/packagechooserq/packagechooserq.qml" line="233"/>
      <source>Please select an option for your install, or use the default: LibreOffice included.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>release_notes</name>
    <message>
      <location filename="../src/modules/welcomeq/release_notes.qml" line="45"/>
      <source>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;This an example QML file, showing options in RichText with Flickable content.&lt;/p&gt;

            &lt;p&gt;QML with RichText can use HTML tags, Flickable content is useful for touchscreens.&lt;/p&gt;

            &lt;p&gt;&lt;b&gt;This is bold text&lt;/b&gt;&lt;/p&gt;
            &lt;p&gt;&lt;i&gt;This is italic text&lt;/i&gt;&lt;/p&gt;
            &lt;p&gt;&lt;u&gt;This is underlined text&lt;/u&gt;&lt;/p&gt;
            &lt;p&gt;&lt;center&gt;This text will be center-aligned.&lt;/center&gt;&lt;/p&gt;
            &lt;p&gt;&lt;s&gt;This is strikethrough&lt;/s&gt;&lt;/p&gt;

            &lt;p&gt;Code example:
            &lt;code&gt;ls -l /home&lt;/code&gt;&lt;/p&gt;

            &lt;p&gt;&lt;b&gt;Lists:&lt;/b&gt;&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;Intel CPU systems&lt;/li&gt;
                &lt;li&gt;AMD CPU systems&lt;/li&gt;
            &lt;/ul&gt;

            &lt;p&gt;The vertical scrollbar is adjustable, current width set to 10.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/release_notes.qml" line="76"/>
      <source>Back</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>usersq</name>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="43"/>
      <source>Pick your user name and credentials to login and perform admin tasks</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="56"/>
      <source>What is your name?</source>
      <translation>ما اسمك؟</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="63"/>
      <source>Your Full Name</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="80"/>
      <source>What name do you want to use to log in?</source>
      <translation>ما الاسم الذي تريده لتلج به؟</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="87"/>
      <source>Login Name</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="116"/>
      <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="129"/>
      <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="138"/>
      <source>root is not allowed as username.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="147"/>
      <source>What is the name of this computer?</source>
      <translation>ما اسم هذا الحاسوب؟</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="153"/>
      <source>Computer Name</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="180"/>
      <source>This name will be used if you make the computer visible to others on a network.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="202"/>
      <source>localhost is not allowed as hostname.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="211"/>
      <source>Choose a password to keep your account safe.</source>
      <translation>اختر كلمة مرور لإبقاء حسابك آمنًا.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="221"/>
      <source>Password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="238"/>
      <source>Repeat Password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="265"/>
      <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="410"/>
      <source>Validate passwords quality</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="420"/>
      <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="402"/>
      <source>Log in automatically without asking for the password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="193"/>
      <source>Only letters, numbers, underscore and hyphen are allowed, minimal of two characters.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="297"/>
      <source>Reuse user password as root password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="305"/>
      <source>Use the same password for the administrator account.</source>
      <translation>استخدم نفس كلمة المرور لحساب المدير.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="318"/>
      <source>Choose a root password to keep your account safe.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="328"/>
      <source>Root Password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="346"/>
      <source>Repeat Root Password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="372"/>
      <source>Enter the same password twice, so that it can be checked for typing errors.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>welcomeq</name>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="35"/>
      <source>&lt;h3&gt;Welcome to the %1 &lt;quote&gt;%2&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up %1 on your computer.&lt;/p&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="66"/>
      <source>Support</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="77"/>
      <source>Known issues</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="88"/>
      <source>Release notes</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="100"/>
      <source>Donate</source>
      <translation type="unfinished"/>
    </message>
  </context>
</TS>
