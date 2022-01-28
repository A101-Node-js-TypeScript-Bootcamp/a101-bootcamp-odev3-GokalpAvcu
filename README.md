# a101-bootcamp-odev3-GokalpAvcu
a101-bootcamp-odev3-GokalpAvcu created by GitHub Classroom

<!-- NoSQL ve SQL arasındaki farklar -->

• SQL veritabanları öncelikle İlişkisel Veritabanları (RDBMS) olarak adlandırılır; 
• NoSQL veritabanı ise öncelikle ilişkisel olmayan veya dağıtılmış veritabanı olarak adlandırılır.

• SQL veritabanları, veriye dayalı yapılandırılmış sorgu dilini (SQL) tanımlar ve işler. Bir yandan bakınca bu dil son derece güçlü.
• SQL, mevcut en çok yönlü ve yaygın olarak kullanılan seçeneklerden biridir ve bu da onu özellikle büyük karmaşık sorgular için güvenli bir seçim haline getirir.
• Ancak diğer taraftan kısıtlayıcı olabilir. SQL, verilerinizle çalışmadan önce verilerinizin yapısını belirlemek için önceden tanımlanmış şemaları kullanmanızı gerektirir.
• Ayrıca tüm verileriniz aynı yapıyı takip etmelidir. Bu, önemli bir ön hazırlık gerektirebilir, bu da yapıdaki bir değişikliğin tüm sisteminiz için hem zor hem de yıkıcı olacağı anlamına gelir. 
• Bir NoSQL veritabanı, yapılandırılmamış veriler için dinamik şemaya sahiptir. Veriler birçok şekilde depolanır; bu, belgeye dayalı, sütun odaklı, grafik tabanlı veya bir KeyValue deposu olarak organize edilebileceği anlamına gelir. 
• Bu esneklik, belgelerin önce tanımlı yapıya sahip olmadan oluşturulabileceği anlamına gelir. Ayrıca her belgenin kendine özgü bir yapısı olabilir. Sözdizimi, veritabanından veritabanına değişir ve ilerledikçe alanlar ekleyebilirsiniz.

• Hemen hemen tüm durumlarda, SQL veritabanları dikey olarak ölçeklenebilir. Bu, RAM, CPU veya SSD gibi şeyleri artırarak tek bir sunucu üzerindeki yükü artırabileceğiniz anlamına gelir.
• Ancak diğer yandan NoSQL veritabanları yatay olarak ölçeklenebilir. Bu, NoSQL veritabanınıza daha fazla sunucu ekleyerek daha fazla trafiği yönetebileceğiniz anlamına gelir. Mahalleye daha fazla bina eklemek yerine aynı binaya daha fazla kat eklemeye benzer. 
• Böylece NoSQL nihayetinde daha büyük ve daha güçlü hale gelebilir, bu da bu veritabanlarını büyük veya sürekli değişen veri kümeleri için tercih edilen seçenek haline getirir.

• SQL veritabanları tablo tabanlıdır, diğer yandan NoSQL veritabanları ya KeyValue çiftleri, belge tabanlı, grafik veritabanları veya wide-column depolarıdır.
• Bu, ilişkisel SQL veritabanlarını, bir muhasebe sistemi gibi çok sıralı işlemler gerektiren uygulamalar veya ilişkisel bir yapı için oluşturulmuş eski sistemler için daha iyi bir seçenek haline getirir.

• SQL veritabanları ACID özelliklerini (Atomic, Consistency, Isolation ve Durability) takip ederken, NoSQL veritabanı Brewers CAP teoremini (Consistency, Availability ve Partition Tolerance) izler.
